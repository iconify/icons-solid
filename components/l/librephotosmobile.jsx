import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fnh_fzb7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 39.114l14.25-14.25a1.22 1.22 0 0 0 0-1.728l-14.25-14.25a1.22 1.22 0 0 0-1.728 0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}

.sw6lz3bwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 43.142l14.25-14.25a1.22 1.22 0 0 0 0-1.728l-14.25-14.25a1.22 1.22 0 0 0-1.728 0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}

.zc7p01b2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 35.086l14.25-14.25a1.22 1.22 0 0 0 0-1.728l-14.25-14.25a1.22 1.22 0 0 0-1.728 0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}
</style><path class="fnh_fzb7o"/><path class="sw6lz3bwh"/><path class="zc7p01b2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:librephotosmobile"} {...others} />);
}

export default Component;
