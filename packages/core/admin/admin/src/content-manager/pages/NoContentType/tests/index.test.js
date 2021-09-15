import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Theme from '../../../../components/Theme';
import NoContentType from '../index';

jest.mock('@strapi/helper-plugin', () => ({
  useFocusWhenNavigate: jest.fn(),
}));

describe('CONTENT MANAGER | pages | NoContentType', () => {
  it('renders and matches the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Router history={createMemoryHistory()}>
        <IntlProvider messages={{}} defaultLocale="en" textComponent="span" locale="en">
          <Theme>
            <NoContentType />
          </Theme>
        </IntlProvider>
      </Router>
    );

    expect(firstChild).toMatchInlineSnapshot(`
      .c0 {
        outline: none;
      }

      .c19 {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.33;
        color: #32324d;
      }

      .c17 {
        padding-right: 8px;
      }

      .c14 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
      }

      .c14 svg {
        height: 12px;
        width: 12px;
      }

      .c14 svg > g,
      .c14 svg path {
        fill: #ffffff;
      }

      .c14[aria-disabled='true'] {
        pointer-events: none;
      }

      .c15 {
        padding: 8px 16px;
        background: #4945ff;
        border: none;
        border-radius: 4px;
        border: 1px solid #d9d8ff;
        background: #f0f0ff;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c15 .c16 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c15 .c18 {
        color: #ffffff;
      }

      .c15[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c15[aria-disabled='true'] .c18 {
        color: #666687;
      }

      .c15[aria-disabled='true'] svg > g,
      .c15[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c15[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c15[aria-disabled='true']:active .c18 {
        color: #666687;
      }

      .c15[aria-disabled='true']:active svg > g,
      .c15[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c15:hover {
        background-color: #ffffff;
      }

      .c15:active {
        background-color: #ffffff;
        border: 1px solid #4945ff;
      }

      .c15:active .c18 {
        color: #4945ff;
      }

      .c15:active svg > g,
      .c15:active svg path {
        fill: #4945ff;
      }

      .c15 .c18 {
        color: #271fe0;
      }

      .c15 svg > g,
      .c15 svg path {
        fill: #271fe0;
      }

      .c1 {
        background: #f6f6f9;
        padding-top: 56px;
        padding-right: 56px;
        padding-bottom: 56px;
        padding-left: 56px;
      }

      .c7 {
        padding-right: 56px;
        padding-left: 56px;
      }

      .c2 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c3 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c4 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.25;
        color: #32324d;
      }

      .c5 {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        color: #666687;
      }

      .c6 {
        font-size: 1rem;
        line-height: 1.5;
      }

      .c13 {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.25;
        color: #666687;
      }

      .c8 {
        background: #ffffff;
        padding: 64px;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
      }

      .c10 {
        padding-bottom: 24px;
      }

      .c12 {
        padding-bottom: 16px;
      }

      .c9 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
      }

      .c11 svg {
        height: 5.5rem;
      }

      <main
        aria-labelledby="main-content-title"
        class="c0"
        id="main-content"
        tabindex="-1"
      >
        <div
          class=""
          style="height: 0px;"
        >
          <div
            class="c1"
            data-strapi-header="true"
          >
            <div
              class="c2"
            >
              <div
                class="c3"
              >
                <h1
                  class="c4"
                  id="main-content-title"
                >
                  Content
                </h1>
              </div>
            </div>
            <p
              class="c5 c6"
            />
          </div>
        </div>
        <div
          class="c7"
        >
          <div
            class="c8 c9"
          >
            <div
              aria-hidden="true"
              class="c10 c11"
            >
              <svg
                fill="none"
                height="1em"
                viewBox="0 0 216 120"
                width="10rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M184 23.75a7 7 0 110 14h-40a7 7 0 110 14h22a7 7 0 110 14h-10.174c-4.874 0-8.826 3.134-8.826 7 0 2.577 2 4.91 6 7a7 7 0 110 14H70a7 7 0 110-14H31a7 7 0 110-14h40a7 7 0 100-14H46a7 7 0 110-14h40a7 7 0 110-14h98zm0 28a7 7 0 110 14 7 7 0 010-14z"
                  fill="#DBDBFA"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M130.672 22.75l9.302 67.843.835 6.806a4 4 0 01-3.482 4.458l-58.56 7.19a4 4 0 01-4.458-3.483l-9.016-73.427a2 2 0 011.741-2.229l.021-.002 4.859-.545 58.758-6.61zm-54.83 6.17l4.587-.515-4.587.515z"
                  fill="#fff"
                  fill-rule="evenodd"
                />
                <path
                  d="M75.842 28.92l4.587-.515m50.243-5.655l9.302 67.843.835 6.806a4 4 0 01-3.482 4.458l-58.56 7.19a4 4 0 01-4.458-3.483l-9.016-73.427a2 2 0 011.741-2.229l.021-.002 4.859-.545 58.758-6.61z"
                  stroke="#7E7BF6"
                  stroke-width="2.5"
                />
                <path
                  clip-rule="evenodd"
                  d="M128.14 27.02l8.42 61.483.757 6.168c.244 1.987-1.15 3.793-3.113 4.035l-52.443 6.439c-1.963.241-3.753-1.175-3.997-3.162l-8.15-66.376a2 2 0 011.742-2.23l6.487-.796"
                  fill="#F0F0FF"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M133.229 10H87.672c-.76 0-1.447.308-1.945.806a2.741 2.741 0 00-.805 1.944v76c0 .76.308 1.447.805 1.945a2.741 2.741 0 001.945.805h59a2.74 2.74 0 001.944-.805 2.74 2.74 0 00.806-1.945V26.185c0-.73-.29-1.43-.806-1.945l-13.443-13.435a2.75 2.75 0 00-1.944-.805z"
                  fill="#fff"
                  fill-rule="evenodd"
                  stroke="#7F7CFA"
                  stroke-width="2.5"
                />
                <path
                  d="M133.672 11.153V22.75a3 3 0 003 3h7.933"
                  stroke="#807EFA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                />
                <path
                  d="M95.672 76.75h26m-26-51h26-26zm0 12h43-43zm0 13h43-43zm0 13h43-43z"
                  stroke="#817FFA"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                />
              </svg>
            </div>
            <div
              class="c12"
            >
              <p
                class="c13"
              >
                You don't have any content yet, we recommend you to create your first Content-Type.
              </p>
            </div>
            <a
              aria-disabled="false"
              class="c14 c15"
              href="/plugins/content-type-builder/content-types/plugin::users-permissions.user?modalType=contentType&kind=collectionType&actionType=create&settingType=base&forTarget=contentType&headerId=content-type-builder.modalForm.contentType.header-create&header_icon_isCustom_1=false&header_icon_name_1=contentType&header_label_1=null"
              variant="secondary"
            >
              <div
                aria-hidden="true"
                class="c16 c17"
              >
                <svg
                  fill="none"
                  height="1em"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 13.604a.3.3 0 01-.3.3h-9.795V23.7a.3.3 0 01-.3.3h-3.21a.3.3 0 01-.3-.3v-9.795H.3a.3.3 0 01-.3-.3v-3.21a.3.3 0 01.3-.3h9.795V.3a.3.3 0 01.3-.3h3.21a.3.3 0 01.3.3v9.795H23.7a.3.3 0 01.3.3v3.21z"
                    fill="#212134"
                  />
                </svg>
              </div>
              <span
                class="c18 c19"
              >
                Create your first Content-type
              </span>
            </a>
          </div>
        </div>
      </main>
    `);
  });
});
