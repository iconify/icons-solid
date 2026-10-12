import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vyt4pcc0y {
  d: path("m12.67 9.39l2.91 8.22l.67 1.89h-8.5l.67-1.89l2.91-8.22L12 7.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4cli5bic {
  cx: 6.66px;
  cy: 15.07px;
  r: 2.5px;
}

.z2ws99b2y {
  d: path("M5.41 12.9a7.01 7.01 0 1 1 13.18 0");
}

.z885y3b8w {
  cx: 17.34px;
  cy: 15.07px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><path class="vyt4pcc0y"/><circle class="y4cli5bic"/><circle class="z885y3b8w"/><path class="z2ws99b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:respirator-sharp"} {...others} />);
}

export default Component;
