import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nwutz1bxa {
  d: path("M10.5 6.75V4.5a1.5 1.5 0 0 1 3 0v2.25M10 21.25V17.5a2 2 0 0 1 4 0v3.75");
}

.p446y1enm {
  d: path("m12.42 6.01l8.41 5.23q.42.26-.08.26H20q-.5 0-.5.5v8.75q0 .5-.5.5H5q-.5 0-.5-.5V12q0-.5-.5-.5h-.75q-.5 0-.08-.26l8.41-5.23q.42-.26.84 0");
}
</style><g class="hntgybcog"><path class="p446y1enm"/><path class="nwutz1bxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:monastery"} {...others} />);
}

export default Component;
