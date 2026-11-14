import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avs9ak-0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5C10 5 7 4.5 2.5 5v13.5C7 18 10 18.5 12 20c2-1.5 5-2 9.5-1.5V5C17 4.5 14 5 12 6.5m0 0V20");
}
</style><path class="avs9ak-0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:api-reference"} {...others} />);
}

export default Component;
