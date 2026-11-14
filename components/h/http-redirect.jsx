import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qf_e32xxb {
  d: path("M3.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0H9c4.5 0 3.5-12 8-12h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xa9a0cbse {
  d: path("M17.75 3.25L20.5 6l-2.75 2.75");
}
</style><g class="ulnmmdpxh"><path class="qf_e32xxb"/><path class="xa9a0cbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:http-redirect"} {...others} />);
}

export default Component;
