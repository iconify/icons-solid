import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dx9ddjb1s {
  d: path("M7.5 8.5h9v5h-9ZM8 16h.01M16 16h.01M7.5 19v2.5m9-2.5v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtqj5bb3g {
  d: path("M4.5 2.5h15V19h-15Zm3.5 3h8");
}
</style><g class="ulnmmdpxh"><path class="xtqj5bb3g"/><path class="dx9ddjb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bus-front"} {...others} />);
}

export default Component;
