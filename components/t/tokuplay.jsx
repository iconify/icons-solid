import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.byhuc22oa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.157 24l-15.236 8.797V15.204z");
}

.q_t34nbvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5C13.783 5.5 5.5 13.783 5.5 24a18.5 18.5 0 0 0 7.014 14.451L5.5 42.501H24c10.217 0 18.5-8.284 18.5-18.5a18.5 18.5 0 0 0-6.98-14.47L42.5 5.5z");
}
</style><path class="q_t34nbvx"/><path class="byhuc22oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tokuplay"} {...others} />);
}

export default Component;
