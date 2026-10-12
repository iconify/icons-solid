import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ckdeowbwc {
  cx: 12px;
  cy: 6px;
  r: 3.25px;
}

.lq41adbrx {
  d: path("M5 21.25h15v-2.5c0-4-3.6-6.5-8-6.5s-8 2.5-8 6.5v2.5zm10-5.75l-4.75 3.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ckdeowbwc"/><path class="lq41adbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:seat-belt-sharp"} {...others} />);
}

export default Component;
