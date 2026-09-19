import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g4u8k4bjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4m-4 9.498h37");
}

.lnu1xbb3u {
  cx: 24px;
  cy: 24.883px;
  r: 5.358px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.woxnqbz3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.116 33.727c.893 1.17 2.253 1.973 4.508 1.973H24a5.36 5.36 0 0 0 5.358-5.358v-5.459");
}
</style><path class="g4u8k4bjb"/><circle class="lnu1xbb3u"/><path class="woxnqbz3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:eortologio"} {...others} />);
}

export default Component;
