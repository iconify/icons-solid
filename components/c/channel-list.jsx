import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ndgr6lcnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 7.5h10.25a4.375 4.375 0 0 1 4.375 4.375v4.75A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-4.75A4.375 4.375 0 0 1 6.875 7.5M8 2.5l4 5l4-5m-9 8.75h10m-10 3h10m-10 3h6.5");
}
</style><path class="ndgr6lcnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:channel-list"} {...others} />);
}

export default Component;
