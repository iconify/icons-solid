import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dqy_2gbug {
  cx: 24px;
  cy: 23.966px;
  r: 11.199px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l6px8ybyh {
  cx: 24px;
  cy: 24px;
  r: 21.38px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pt44n8bwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.287 7.597l7.113 7.322m-9.976-4.424l7.32 7.166M37.535 7.449l-7.248 7.25m10.46-3.99l-7.489 6.956M30.35 33.19l7.26 7.298m-4.281-10.326l7.362 7.198m-25.856-6.957L7.357 37.42m10.473-4.107l-7.318 7.276");
}
</style><circle class="l6px8ybyh"/><circle class="dqy_2gbug"/><path class="pt44n8bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:paradise-lust"} {...others} />);
}

export default Component;
