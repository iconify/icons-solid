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

.htpkuubab {
  d: path("M12 17.5c0 2 .75 3 2.25 4");
}

.zkjclebdp {
  d: path("M9 7a3.25 3.25 0 1 1 6 0a3.25 3.25 0 1 1 0 6a3.25 3.25 0 1 1-6 0a3.25 3.25 0 1 1 0-6");
}
</style><g class="hntgybcog"><path class="zkjclebdp"/><path class="htpkuubab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-clover-four"} {...others} />);
}

export default Component;
