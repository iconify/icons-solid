import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h-7pzibqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.921 29.119l.008-10.24l8.864 5.127zm12.11 7.424l4.644-4.903m-9.287 0l4.643 4.903m-.027-11.175l.027 11.175");
}

.v1jzh7b7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.043 23.998v-7.867a4.164 4.164 0 0 0-4.174-4.174H16.131a4.164 4.164 0 0 0-4.174 4.174v15.738a4.164 4.164 0 0 0 4.174 4.174h8.01");
}
</style><circle class="cpk0fnbgt"/><path class="v1jzh7b7k"/><path class="h-7pzibqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fetchit"} {...others} />);
}

export default Component;
