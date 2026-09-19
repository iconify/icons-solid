import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pljhhxjri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.433 32.209l6.374-11.039l6.375 11.039zm6.375-21.799h-5.616L5.5 37.59h5.616");
}

.w9pqv6blq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.808 10.41L11.116 37.59H42.5z");
}
</style><path class="w9pqv6blq"/><path class="pljhhxjri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tigad"} {...others} />);
}

export default Component;
