import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yymg3jb4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za4.5 4.5 0 0 1 4.5 4.5v2A4.5 4.5 0 0 1 12 14a4.5 4.5 0 0 1-4.5-4.5v-2A4.5 4.5 0 0 1 12 3M2.5 16.25h3l3.5 3.5h7.5L20.75 16A1.25 1.25 0 0 0 19 14.25L15.75 17H11.5M12 6.75h.01m-.01 3.5h.01");
}
</style><path class="yymg3jb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:car-keys-handover"} {...others} />);
}

export default Component;
