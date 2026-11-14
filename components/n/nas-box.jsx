import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ltmtgl9ai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h7a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 13 20H6a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 6 4m0 5h4m-4 5h4m3-5h.01M13 14h.01m3.49-2h2a2.5 2.5 0 0 1 2.5 2.5v6");
}
</style><path class="ltmtgl9ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:nas-box"} {...others} />);
}

export default Component;
