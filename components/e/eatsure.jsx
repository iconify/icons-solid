import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h__kugb8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.488h39v23.028h-39zm19.498 23.025V12.484m-8.151 7.298H24m12.237 0H43.5");
}

.vit_ohddi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.577 28.094c5.737 2.368 11.363 2.4 16.846 0");
}
</style><path class="h__kugb8b"/><path class="vit_ohddi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:eatsure"} {...others} />);
}

export default Component;
