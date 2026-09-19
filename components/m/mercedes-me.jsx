import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i1pf-qb8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24V2.5M24 24L5.38 34.75M24 24l18.62 10.75M24 24v3.14M24 24l2.72-1.57M24 24l-2.72-1.57m0 0L24 2.5m2.72 19.93L24 2.5m18.62 32.25l-15.9-12.32M24 27.14l18.62 7.61m-37.24 0L24 27.14m-2.72-4.71L5.38 34.75");
}
</style><circle class="cpk0fnbgt"/><path class="i1pf-qb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mercedes-me"} {...others} />);
}

export default Component;
