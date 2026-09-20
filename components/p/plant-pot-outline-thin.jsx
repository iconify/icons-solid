import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.czq8efv3e {
  d: path("M8 13v8h8v-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.luzt4cbce {
  d: path("M12 13c0 -3 3 -6 6 -7 0 3 -2 6 -6 7");
}

.wlp3ibbib {
  d: path("M6 13h12");
}

.zzohglbtd {
  d: path("M12 13c0 -4 -3 -7 -6 -8 0 4 2 7 6 8");
}
</style><g class="hntgybcog"><path class="czq8efv3e"/><path class="wlp3ibbib"/><path class="zzohglbtd"/><path class="luzt4cbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:plant-pot-outline-thin"} {...others} />);
}

export default Component;
