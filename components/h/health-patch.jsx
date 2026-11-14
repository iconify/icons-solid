import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-kichb8c {
  d: path("M2.75 14.5a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 1 0-13.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uziuzvbpj {
  d: path("M6.5 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.394-8.935a9.25 9.25 0 0 1 6.541 6.541m-4.916-8.647a11.75 11.75 0 0 1 7.022 7.022");
}
</style><g class="ulnmmdpxh"><path class="b-kichb8c"/><path class="uziuzvbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:health-patch"} {...others} />);
}

export default Component;
