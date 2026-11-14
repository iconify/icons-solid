import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0ktv9bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5h10v10h-10Zm0 10l10-10m-14 5h19m-10 0V3M9.25 5.25L11.5 3l2.25 2.25m5.5 7l2.25 2.25l-2.25 2.25");
}
</style><path class="p0ktv9bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:beam-splitter"} {...others} />);
}

export default Component;
