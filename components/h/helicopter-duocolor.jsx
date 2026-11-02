import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mllmdkhdl {
  d: path("M9 15a2 2 0 0 0 2 2h6a4 4 0 0 0 4-4c0-3.31-3.58-6-8-6a4 4 0 0 0-4 4Zm-6-2h6m-6-3v6m10 1v4m4-4v4m-8 0h12M13 7v4a2 2 0 0 0 2 2h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p9h-8fbzv {
  stroke-opacity: 0.4;
  d: path("M5 3h16m-8 0v4");
}
</style><g class="nrj6p8qat"><path class="p9h-8fbzv"/><path class="mllmdkhdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:helicopter-duocolor"} {...others} />);
}

export default Component;
