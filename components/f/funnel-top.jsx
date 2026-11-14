import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fvcynobnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.456 8.5h9.088a1.75 1.75 0 0 1 1.19 3.032l-3.175 2.949A1.75 1.75 0 0 0 14 15.763v3.487A1.75 1.75 0 0 1 12.25 21h-.5A1.75 1.75 0 0 1 10 19.25v-3.487a1.75 1.75 0 0 0-.559-1.282l-3.175-2.949A1.75 1.75 0 0 1 7.456 8.5M8.5 4.75h.01M12 3h.01m3.49 1.75h.01");
}
</style><path class="fvcynobnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:funnel-top"} {...others} />);
}

export default Component;
