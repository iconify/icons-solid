import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2lkeqpus {
  cx: 10px;
  cy: 10px;
  r: 3.5px;
}

.byxvskbyl {
  cx: 10px;
  cy: 10px;
  r: 6px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xstyffvge {
  d: path("M10 16v5.25m8.5-13.5l2.75-1.5m-2.75 6l2.75 1.5");
}
</style><g class="x2cwu0gfd"><circle class="byxvskbyl"/><circle class="b2lkeqpus"/><path class="xstyffvge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:reflector-disc-sharp"} {...others} />);
}

export default Component;
