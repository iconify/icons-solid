import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r-f11_wvo {
  d: path("M14 8.25V12l2.5 1.5m-13.75-5h2.5M2.75 12H4.5m-1.75 3.5h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqztkowql {
  cx: 14px;
  cy: 12px;
  r: 7.25px;
}
</style><g class="x2cwu0gfd"><circle class="xqztkowql"/><path class="r-f11_wvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:clock-fast-sharp"} {...others} />);
}

export default Component;
