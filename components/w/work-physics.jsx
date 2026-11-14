import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ik01oubuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.625 5.5h5.75A2.625 2.625 0 0 1 21 8.125v4.75a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 10 12.875v-4.75A2.625 2.625 0 0 1 12.625 5.5M2.5 18.5h19m-19-8H7M5 8.25l2.25 2.25L5 12.75");
}
</style><path class="ik01oubuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:work-physics"} {...others} />);
}

export default Component;
