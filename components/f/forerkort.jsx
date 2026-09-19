import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rs-jd5b6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.558 30.005H9.14s-.276-5.49 5.21-5.49c5.461 0 5.21 5.49 5.21 5.49z");
}

.tcofksbvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 36.5v-25a3 3 0 0 0-3-3h-33a3 3 0 0 0-3 3v25a3 3 0 0 0 3 3h33a3 3 0 0 0 3-3m-19.173-19h14.77m-14.77 6.252h14.77m-14.77 6.253h14.77");
}

.tl6kt9nzo {
  cx: 14.349px;
  cy: 20.069px;
  r: 2.57px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="tcofksbvb"/><path class="rs-jd5b6u"/><circle class="tl6kt9nzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:forerkort"} {...others} />);
}

export default Component;
