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

.suicchbok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.984 27.352v.083a6.74 6.74 0 0 1-6.742 6.742h0A6.74 6.74 0 0 1 9.5 27.435v-6.87a6.74 6.74 0 0 1 6.742-6.741h0a6.74 6.74 0 0 1 6.742 6.742v.083m4.576-6.826v20.354m0-7.09L38.5 13.892m0 20.285L30.12 24");
}
</style><path class="i9clfwm2k"/><path class="suicchbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cashkaro"} {...others} />);
}

export default Component;
