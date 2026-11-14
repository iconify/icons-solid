import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j97wz4bas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M7 20v-2h10v2M12 3.5c3.5 3 4.5 5.5 4.5 7a4.5 4.5 0 0 1-9 0c0-1.5.75-3.25 1.75-4.25c.5 1.75 1.5 2.25 2.25 2.25c0-1.75-.5-3.5.5-5");
}
</style><path class="j97wz4bas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hob-burner-on"} {...others} />);
}

export default Component;
