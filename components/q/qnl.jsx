import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qiaeg7i-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24L24 14.75L43.5 24L24 33.25zM22 15.699v8.337m0 3.623v4.643m-4-14.706v6.083m9-7.506v8.308m7.5-4.75v5.42m-3.432 4.746L5.416 23.565m34.619 2.079L7.206 22.717");
}
</style><path class="qiaeg7i-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:qnl"} {...others} />);
}

export default Component;
