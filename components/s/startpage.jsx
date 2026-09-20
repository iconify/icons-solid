import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.goa7suu0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.362 21.8l5.125 5.125");
}

.qnec5po8j {
  cx: 17px;
  cy: 17.438px;
  r: 6.169px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wtjzvabch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.965 40.584s-1.768-6.02-2.805-7.416c4.445.77 17.34 8.894 17.34 8.894c-1.224-6.321-9.824-16.182-10.82-16.822c3.335 0 8.387 1.961 8.387 1.961c-1.613-4.221-14.716-18.21-16.841-19.43A11.5 11.5 0 0 0 17 5.937c-6.351 0-11.5 5.149-11.5 11.5a11.58 11.58 0 0 0 3.401 8.144c5.595 5.582 18.581 14.239 19.063 15.002");
}
</style><path class="wtjzvabch"/><circle class="qnec5po8j"/><path class="goa7suu0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:startpage"} {...others} />);
}

export default Component;
