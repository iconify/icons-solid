import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ouc3_heug {
  d: path("M3 7.5a9 3.5 0 1 0 18 0a9 3.5 0 1 0-18 0Z");
}

.tg681ubiq {
  d: path("M3 7.5v8a9 3.5 0 0 0 18 0v-8m-18 4a9 3.5 0 0 0 18 0m-11.5-4h.01m4.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ouc3_heug"/><path class="tg681ubiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:biscuits-stack"} {...others} />);
}

export default Component;
