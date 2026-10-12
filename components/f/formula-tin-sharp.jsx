import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmpif9znc {
  d: path("M4.5 11h15M8 14h8v4.25H8Z");
}

.ss51tqb1w {
  d: path("M14.5 4H11M4.5 7.5h15v13.75h-15z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zxt2az7as {
  cx: 15.75px;
  cy: 4px;
  r: 1.25px;
}
</style><g class="x2cwu0gfd"><circle class="zxt2az7as"/><path class="ss51tqb1w"/><path class="fmpif9znc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:formula-tin-sharp"} {...others} />);
}

export default Component;
