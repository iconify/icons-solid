import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjij0h9dq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6 0h11m-3.5-3.5L20 7l-3.5 3.5M17 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-2 0H4m3.5-3.5L4 17l3.5 3.5");
}
</style><path class="xjij0h9dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:transfer-horizontal"} {...others} />);
}

export default Component;
