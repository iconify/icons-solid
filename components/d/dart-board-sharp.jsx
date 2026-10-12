import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.doltwk4-b {
  d: path("M12.5 13.5h5.75m-9.75 0H2.75m7.75 2v5.75m0-9.75V5.75m0 7.75l8-8m-2.25-1.25v3.5h3.5");
}

.r0n4bnoau {
  cx: 10.5px;
  cy: 13.5px;
  r: 4.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xh4evtb-j {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.75px;
}
</style><g class="x2cwu0gfd"><circle class="xh4evtb-j"/><circle class="r0n4bnoau"/><path class="doltwk4-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dart-board-sharp"} {...others} />);
}

export default Component;
