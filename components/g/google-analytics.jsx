import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eokpm4bio {
  cx: 10.5px;
  cy: 37.5px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pq18nzxcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 42.5za5 5 0 0 0 5-5v-27a5 5 0 0 0-10 0v27a5 5 0 0 0 5 5m-13.5 0za5 5 0 0 0 5-5v-16a5 5 0 0 0-10 0v16a5 5 0 0 0 5 5");
}
</style><path class="pq18nzxcr"/><circle class="eokpm4bio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:google-analytics"} {...others} />);
}

export default Component;
