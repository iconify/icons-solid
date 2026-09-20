import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p42jin82m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.825 26.953c-23.963-1.198-9.816 19.567 0 6.09");
}

.pbb8u4b7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.297 5.5v16.328l5.321-2.661l5.321 2.661V5.5M11.075 22.56c0-5.29 11.75-5.69 11.75.799v11.963a2.287 2.287 0 0 0 2.287 2.287");
}

.v-q6dl-pf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.066 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="v-q6dl-pf"/><path class="pbb8u4b7m"/><path class="p42jin82m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:worterbuch"} {...others} />);
}

export default Component;
