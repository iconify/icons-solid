import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hp425mqcz {
  d: path("M9.656 17.844h14.159A6.14 6.14 0 0 1 29.97 24v6.156H9.656C6.246 30.156 3.5 27.41 3.5 24s2.745-6.156 6.156-6.156");
}

.p2a6vfbkp {
  cx: 23.677px;
  cy: 23.964px;
  r: 2.77px;
}

.rp91zdb5j {
  cx: 9.919px;
  cy: 23.964px;
  r: 2.77px;
}

.v-78f9boj {
  cx: 38.247px;
  cy: 24px;
  r: 2.638px;
}

.xrp-nhbyl {
  d: path("M44.5 24c0 3.4-2.756 6.156-6.156 6.156h-6.156V24A6.156 6.156 0 0 1 44.5 24");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="rp91zdb5j"/><path class="hp425mqcz"/><circle class="p2a6vfbkp"/></g><g class="y9tr6bcfx"><circle class="v-78f9boj"/><path class="xrp-nhbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:thangs"} {...others} />);
}

export default Component;
