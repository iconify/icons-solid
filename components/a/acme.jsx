import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.qdp_rwz5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.39 25.493H9.472M8.5 28.424l2.93-8.848l2.932 8.848m7.377-2.967v.036a2.93 2.93 0 1 1-5.862 0v-2.986a2.93 2.93 0 0 1 5.862 0v.037m2.245 5.87v-8.838l4.423 8.848l4.424-8.835v8.835M35.076 24h2.884m1.54 4.424h-4.424v-8.848H39.5");
}
</style><path class="qdp_rwz5z"/><rect class="jc1oydeao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:acme"} {...others} />);
}

export default Component;
