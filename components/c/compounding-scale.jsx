import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aou_y8cci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5h13m-6.5 0V20m-4.5 0h9m-14-8.5l3-7l3 7a3 3 0 0 1-6 0m13 0l3-7l3 7a3 3 0 0 1-6 0");
}
</style><path class="aou_y8cci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:compounding-scale"} {...others} />);
}

export default Component;
