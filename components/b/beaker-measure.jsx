import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h75uamgzm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5v6l-6 11c-.5 1 0 2 1.25 2h14.5c1.25 0 1.75-1 1.25-2l-6-11v-6M8 2.5h8M6 15h12M7.75 12H10m-5.25 6h2.5");
}
</style><path class="h75uamgzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:beaker-measure"} {...others} />);
}

export default Component;
