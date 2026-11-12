import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jy2u6qbys {
  d: path("M12 4L12 20");
}

.k2-30wbbi {
  d: path("M4 11L4 13");
}

.pz2mgtkjp {
  d: path("M20 11L20 13");
}

.raaf8s_fa {
  d: path("M16 7L16 9M16 13L16 17");
}

.v_l5o-b7n {
  d: path("M8 17L8 15M8 11L8 7");
}
</style><g class="ipq1z-bjh"><path class="jy2u6qbys"/><path class="raaf8s_fa"/><path class="v_l5o-b7n"/><path class="pz2mgtkjp"/><path class="k2-30wbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-broken"} {...others} />);
}

export default Component;
