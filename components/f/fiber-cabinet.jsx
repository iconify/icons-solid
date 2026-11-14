import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6rjnty_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.125 2.5h7.75A2.625 2.625 0 0 1 18.5 5.125v10.25A2.625 2.625 0 0 1 15.875 18h-7.75A2.625 2.625 0 0 1 5.5 15.375V5.125A2.625 2.625 0 0 1 8.125 2.5M7.5 18v3h9v-3M12 5.5V15");
}
</style><path class="d6rjnty_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fiber-cabinet"} {...others} />);
}

export default Component;
