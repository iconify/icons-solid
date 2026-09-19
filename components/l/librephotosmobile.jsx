import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cjr_sf4wu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 43.142l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}

.drztn1bgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 35.086l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}

.mjd6lfpmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 39.114l14.25-14.25a1.22 1.22 0 0 0 0-1.728h0l-14.25-14.25a1.22 1.22 0 0 0-1.728 0h0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728h0l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}
</style><path class="mjd6lfpmr"/><path class="cjr_sf4wu"/><path class="drztn1bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:librephotosmobile"} {...others} />);
}

export default Component;
