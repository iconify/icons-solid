import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.ppbkvwc-z {
  d: path("M5.75 10.5v3.75l.56-.5l1.38-1.25l.56-.5l-.56-.5l-1.38-1.25l-.56-.5zm12.5 0v3.75l-.56-.5l-1.38-1.25l-.56-.5l.56-.5l1.38-1.25l.56-.5zM12 8.5v7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="ppbkvwc-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:max-width-sharp"} {...others} />);
}

export default Component;
