import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2aifkuku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15.25v-3L4.5 10A1.75 1.75 0 0 1 7 7.5V5.75a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0v9.5m-11 0h12l1.5 5.5h-15Zm6-9.5V9");
}
</style><path class="z2aifkuku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:racing-gloves"} {...others} />);
}

export default Component;
