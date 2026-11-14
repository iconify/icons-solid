import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k3es_jbnn {
  d: path("M5 14H9.6");
}

.qtl0xvb8o {
  d: path("M7.5 18H16.5");
}

.vnh-5-_9e {
  d: path("M13 14H19");
}

.w4y0zdb1t {
  d: path("M7.5 10H16.5");
}

.y8rchkbuh {
  d: path("M5 6H19");
}
</style><g class="hntgybcog"><path class="y8rchkbuh"/><path class="w4y0zdb1t"/><path class="k3es_jbnn"/><path class="vnh-5-_9e"/><path class="qtl0xvb8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-align-center-broken"} {...others} />);
}

export default Component;
