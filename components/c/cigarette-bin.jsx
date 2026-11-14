import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vng0i09qa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5h15V12h-15ZM7 12v7.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V12M9 5.75h6m3-.5q-1.25-1.5 0-2.75");
}
</style><path class="vng0i09qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cigarette-bin"} {...others} />);
}

export default Component;
