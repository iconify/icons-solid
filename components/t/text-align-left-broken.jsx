import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dnytl_40k {
  d: path("M5 18H14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgeg8bc0n {
  d: path("M5 10H14");
}

.k3es_jbnn {
  d: path("M5 14H9.6");
}

.vnh-5-_9e {
  d: path("M13 14H19");
}

.y8rchkbuh {
  d: path("M5 6H19");
}
</style><g class="hntgybcog"><path class="y8rchkbuh"/><path class="jgeg8bc0n"/><path class="k3es_jbnn"/><path class="vnh-5-_9e"/><path class="dnytl_40k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-align-left-broken"} {...others} />);
}

export default Component;
