import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bzvlmbpde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15h11a3.5 3.5 0 0 0 0-7A5.5 5.5 0 0 0 7 9a3.25 3.25 0 0 0-.5 6m2 2.75l-1 3m5-3l-1 3m5-3l-1 3");
}
</style><path class="bzvlmbpde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drizzle"} {...others} />);
}

export default Component;
