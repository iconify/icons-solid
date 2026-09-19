import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fb4-1m_jg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.038 32.492a3.16 3.16 0 1 1 2.162 0m-2.162 0l-.008 3.394m2.17-3.394v3.394m0 0a1.085 1.085 0 0 1-2.17 0");
}

.iswb3-bah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.616 16.09a11.59 11.59 0 1 1 23.179 0m0 4.23H6.615V43.5h23.18m0-23.18a11.59 11.59 0 0 1 11.59 11.59h0a11.59 11.59 0 0 1-11.59 11.59h0M6.616 20.32v-4.23m23.179 4.23v-4.23");
}
</style><path class="iswb3-bah"/><path class="fb4-1m_jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:buttercup"} {...others} />);
}

export default Component;
