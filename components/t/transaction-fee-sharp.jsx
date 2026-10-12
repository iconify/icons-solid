import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6mn5k9sv {
  d: path("M7.75 9.75h8.5M14 7.5l2.25 2.25L14 12m2.25 2.25h-8.5M10 12l-2.25 2.25L10 16.5");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="z6mn5k9sv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:transaction-fee-sharp"} {...others} />);
}

export default Component;
