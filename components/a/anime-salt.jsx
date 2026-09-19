import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.atebvrwdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.275 24L12.232 5.5v37zm-21.56-12.447v24.886m4.89-15.994l11.788 6.373M17.132 14.536v4.996m0 5.237v14.902");
}

.peob02b_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.573 27.705l.944-.534L22.913 24");
}
</style><path class="atebvrwdl"/><path class="peob02b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anime-salt"} {...others} />);
}

export default Component;
