import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hltau0hon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.79 6.37l6.42 1.01l.79.12l-.48.64l-3.54 4.72l-.48.64l-.35-.72l-2.8-5.81L3 6.25zm16.42 0l-6.42 1.01l-.79.12l.48.64l3.54 4.72l.48.64l.35-.72l2.8-5.81l.35-.72zM6.5 13.5l-1 7.75m-2.5 0h5m9.5-7.75l1 7.75m-2.5 0h5m-9-18.5v2M9.25 3.5l1 1.25m4.5-1.25l-1 1.25");
}
</style><path class="hltau0hon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:toast-glasses-sharp"} {...others} />);
}

export default Component;
