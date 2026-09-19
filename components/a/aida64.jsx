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

.oa0ecbbug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.193 35.218V12.785L24.136 27.927h14.861");
}

.tit2c8_hp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.298 15.443c-1.121-1.682-3.084-2.804-6.169-2.804h-.56a7.54 7.54 0 0 0-7.572 7.571v7.571");
}

.wz1y4pbuo {
  cx: 16.568px;
  cy: 27.781px;
  r: 7.571px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="oa0ecbbug"/><circle class="wz1y4pbuo"/><path class="tit2c8_hp"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aida64"} {...others} />);
}

export default Component;
