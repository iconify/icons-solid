import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.atoje4bsc {
  d: path("M2 6h20");
}

.e948j-b5x {
  d: path("M18 6v11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.njj_4bcir {
  d: path("M6 6v11");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.xj193cz1p {
  d: path("M12 6v11");
}
</style><g class="hntgybcog"><path class="atoje4bsc"/><path class="njj_4bcir"/><path class="xj193cz1p"/><path class="e948j-b5x"/><path class="pmuiqo95v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:balcony-outline-thin"} {...others} />);
}

export default Component;
