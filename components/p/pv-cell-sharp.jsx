import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dng946bwp {
  d: path("M9.5 5H11M5 9.5V11m3.18-2.82l1.06 1.06m.51 3.01h11.5l-.32.68l-2.11 4.39l-.32.68H6.25l.32-.68l2.11-4.39l.32-.68zm5.38 0L12.38 18m-4.75-2.87h12.24M12.38 18v3.25m-3.25 0h6.5");
}

.up5bnccaf {
  cx: 5px;
  cy: 5px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="up5bnccaf"/><path class="dng946bwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pv-cell-sharp"} {...others} />);
}

export default Component;
