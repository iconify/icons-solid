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

.fmtxi7b7d {
  cx: 6.881px;
  cy: 18.438px;
  r: 0.75px;
  fill: currentColor;
}

.mb4g9zbzc {
  cx: 13.42px;
  cy: 38.562px;
  r: 0.75px;
  fill: currentColor;
}

.o4he8abcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.374 13.533v20.934m11.252 0L20.991 24l8.635-10.467M20.991 24h-2.617");
}

.ow3zn9b5a {
  cx: 41.119px;
  cy: 18.438px;
  r: 0.75px;
  fill: currentColor;
}

.tlkhku-6p {
  cx: 24px;
  cy: 6px;
  r: 0.75px;
  fill: currentColor;
}

.z38du568i {
  cx: 34.58px;
  cy: 38.562px;
  r: 0.75px;
  fill: currentColor;
}
</style><circle class="cpk0fnbgt"/><path class="o4he8abcm"/><circle class="tlkhku-6p"/><circle class="ow3zn9b5a"/><circle class="z38du568i"/><circle class="mb4g9zbzc"/><circle class="fmtxi7b7d"/><circle class="tlkhku-6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kinemaster"} {...others} />);
}

export default Component;
