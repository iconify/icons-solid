import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mzgs10xpk {
  d: path("M2.75 21.25a5.5 5.5 0 0 1 11 0Zm16.5-18.5v9.5a2.25 2.25 0 0 1-4.5 0V11");
}

.pfv654-ms {
  cx: 8.25px;
  cy: 9px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="pfv654-ms"/><path class="mzgs10xpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:social-engineering-sharp"} {...others} />);
}

export default Component;
