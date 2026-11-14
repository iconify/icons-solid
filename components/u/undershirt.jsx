import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmtxjlbgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.5V5c0 3-2.25 4.5-2.25 7v9.5h15V12c0-2.5-2.25-4-2.25-7V2.5h-3c0 6-4.5 6-4.5 0Zm-2.25 16h15");
}
</style><path class="xmtxjlbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:undershirt"} {...others} />);
}

export default Component;
