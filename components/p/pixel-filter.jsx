import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hs9eagbat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M5.5 24h37M24 5.5v37m0-27.75h18.5M33.25 5.5v37m4.625-37v37M28.625 24v18.5m-9.25-9.25v9.25m-9.25-9.25v9.25m4.625 0V24M5.5 33.25h37m-9.25 2.313h9.25m-9.25 4.625h8.875M24 28.625h18.5m-9.25-9.25h9.25m-9.25-9.25h9.25M6.005 37.8h37m-2.817-4.55v8.874m-4.625-8.874v9.25");
}
</style><path class="hs9eagbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pixel-filter"} {...others} />);
}

export default Component;
