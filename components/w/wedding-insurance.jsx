import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q-_7c-hrf {
  d: path("M4 14.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1ikm4qwv {
  d: path("M10 14.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0ZM7 6l1.25-2.5h1.5L11 6L9 8Z");
}
</style><g class="ulnmmdpxh"><path class="q-_7c-hrf"/><path class="z1ikm4qwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wedding-insurance"} {...others} />);
}

export default Component;
