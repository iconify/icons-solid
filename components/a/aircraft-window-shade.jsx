import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i49o812pa {
  d: path("M9 2.5h6a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-11a4 4 0 0 1 4-4Z");
}

.rz4ly-bbo {
  d: path("M9 5.5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1ZM8 12h8m-5.5 2.75h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i49o812pa"/><path class="rz4ly-bbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aircraft-window-shade"} {...others} />);
}

export default Component;
