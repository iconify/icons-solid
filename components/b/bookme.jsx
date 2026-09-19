import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.htgxcn8gw {
  cx: 31.39px;
  cy: 18.765px;
  rx: 5.963px;
  ry: 5.072px;
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.jef5gcceg {
  cx: 17.061px;
  cy: 18.766px;
  rx: 5.963px;
  ry: 5.072px;
}

.tm7sg_bzr {
  d: path("M19.248 33.972s7.812 1.875 14.425-5.78");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><ellipse transform="rotate(-40.563 17.062 18.766)" class="jef5gcceg"/><ellipse transform="rotate(-40.563 31.39 18.765)" class="htgxcn8gw"/><path class="tm7sg_bzr"/></g><path class="i9clfwm2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bookme"} {...others} />);
}

export default Component;
