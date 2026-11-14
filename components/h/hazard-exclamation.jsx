import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.az-zfzbow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.712 6.212l2.076 2.076a5.25 5.25 0 0 1 0 7.424l-2.076 2.076a5.25 5.25 0 0 1-7.424 0l-2.076-2.076a5.25 5.25 0 0 1 0-7.424l2.076-2.076a5.25 5.25 0 0 1 7.424 0M12 7.5v5.25m0 3.5h.01");
}
</style><path class="az-zfzbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hazard-exclamation"} {...others} />);
}

export default Component;
