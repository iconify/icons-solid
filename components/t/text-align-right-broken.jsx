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

.lxaxfex0h {
  d: path("M10 18H19");
}

.nh4_ot8ve {
  d: path("M10 10H19");
}

.vnh-5-_9e {
  d: path("M13 14H19");
}

.y8rchkbuh {
  d: path("M5 6H19");
}
</style><g class="hntgybcog"><path class="y8rchkbuh"/><path class="nh4_ot8ve"/><path class="k3es_jbnn"/><path class="vnh-5-_9e"/><path class="lxaxfex0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-align-right-broken"} {...others} />);
}

export default Component;
