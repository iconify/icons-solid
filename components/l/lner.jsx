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

.rlt7g-3uu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.672 29.153V18.847h3.349c1.933 0 3.479 1.546 3.479 3.478s-1.546 3.48-3.48 3.48h-3.348m3.475-.004l3.224 3.224M8.5 18.847v10.306h5.153m2.346 0V18.847l6.829 10.306V18.847M25.172 24h3.35m1.804 5.153h-5.155V18.847h5.154");
}
</style><circle class="cpk0fnbgt"/><path class="rlt7g-3uu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lner"} {...others} />);
}

export default Component;
