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

.idplblmkl {
  d: path("M3.25 8.5a5.25 2 0 0 0 10.5 0m-.14 1.2l7.64 1.8m-9.04.71L19 19m-9.3-5.39l1.8 7.64");
}

.ysgoz85np {
  cx: 8.5px;
  cy: 8.5px;
  r: 5.25px;
}
</style><g class="hntgybcog"><circle class="ysgoz85np"/><path class="idplblmkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sputnik"} {...others} />);
}

export default Component;
