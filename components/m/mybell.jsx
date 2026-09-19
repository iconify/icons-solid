import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.oacy_iqbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.853 24a3.85 3.85 0 1 1 0 7.7H9.5V16.3h6.353a3.85 3.85 0 1 1 0 7.7m0 0H9.5m19.429 5.757a3.85 3.85 0 0 1-3.345 1.943h0a3.85 3.85 0 0 1-3.85-3.85v-2.503a3.85 3.85 0 0 1 3.85-3.85h0a3.85 3.85 0 0 1 3.85 3.85V26.6h-7.7m9.73-10.3v13.475c0 1.063.862 1.925 1.925 1.925h.578m2.03-15.4v13.475c0 1.063.862 1.925 1.925 1.925h.578");
}
</style><path class="i9clfwm2k"/><path class="oacy_iqbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mybell"} {...others} />);
}

export default Component;
