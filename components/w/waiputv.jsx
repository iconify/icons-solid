import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n2_tg_ent {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.434 40.872l12.83-7.564a5.65 5.65 0 0 0 2.779-4.864v-15.64c0-5.099-5.542-8.265-9.934-5.676l-12.83 7.564A5.65 5.65 0 0 0 4.5 19.556v15.64c0 5.099 5.542 8.265 9.934 5.676");
}

.zg2602bba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.891 40.872l12.83-7.564a5.65 5.65 0 0 0 2.779-4.864v-15.64c0-5.099-5.542-8.265-9.934-5.676l-12.83 7.564a5.65 5.65 0 0 0-2.779 4.864v15.64c0 5.099 5.542 8.265 9.934 5.676");
}
</style><path class="n2_tg_ent"/><path class="zg2602bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:waiputv"} {...others} />);
}

export default Component;
