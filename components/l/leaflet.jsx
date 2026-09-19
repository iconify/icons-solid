import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aw-51dblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 21.366l2.565 4.885v16.776m6.88-27.177L24 21.366m0 0V4.5");
}

.lddtv9lum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 21.366l-2.565 4.885v16.776m-6.88-27.177L24 21.366M24 4.5s11.069 9.052 13.722 22.165S26.463 43.5 24 43.5m13.494-17.94l-10.93 6.512");
}

.p3b29h63s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5s-11.069 9.052-13.722 22.165S21.537 43.5 24 43.5M10.506 25.56l10.93 6.512");
}
</style><path class="p3b29h63s"/><path class="lddtv9lum"/><path class="aw-51dblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:leaflet"} {...others} />);
}

export default Component;
