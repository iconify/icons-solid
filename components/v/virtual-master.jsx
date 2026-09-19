import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h157wabyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.593 5.5l-12.594 7.423L11.407 5.5");
}

.kc9aqtmoq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.585 22.557v13.837L23.999 42.5l-10.583-6.106V22.557");
}

.xv5i6pb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.62 32.7V11.278L24 21.343L7.379 11.28V32.7");
}
</style><path class="kc9aqtmoq"/><path class="xv5i6pb9e"/><path class="h157wabyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:virtual-master"} {...others} />);
}

export default Component;
