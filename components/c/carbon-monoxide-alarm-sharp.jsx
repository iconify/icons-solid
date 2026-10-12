import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.qi3i_ebew {
  cx: 15.25px;
  cy: 12px;
  r: 2.5px;
}

.wozrn6byu {
  d: path("M10.52 10.23a2.5 2.5 0 1 0 0 3.54");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="wozrn6byu"/><circle class="qi3i_ebew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:carbon-monoxide-alarm-sharp"} {...others} />);
}

export default Component;
