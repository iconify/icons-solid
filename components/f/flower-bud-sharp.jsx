import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.flfr9upcz {
  d: path("M12 13.75v7.5m0-1.5C12.5 18 14.25 17 16.5 17c-.5 1.75-2.25 2.75-4.5 2.75Z");
}

.n82h92bfv {
  d: path("M13.91 6.37A2.25 2.25 0 1 1 15.09 10A2.25 2.25 0 1 1 12 12.25A2.25 2.25 0 1 1 8.91 10a2.25 2.25 0 1 1 1.18-3.63a2.25 2.25 0 1 1 3.82 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-ze1jbyb {
  cx: 12px;
  cy: 9px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><path class="n82h92bfv"/><circle class="z-ze1jbyb"/><path class="flfr9upcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:flower-bud-sharp"} {...others} />);
}

export default Component;
