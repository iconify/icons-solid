import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w0vxhyrzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.45 3.14l12.1 6.72q.7.39-.07.61l-4.71 1.31q-.77.22-1.08.96l-2.13 5.02q-.31.74-.53-.03L4.97 3.52q-.22-.77.48-.38m9.8 12.11l6 6m0-4v4h-4");
}
</style><path class="w0vxhyrzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:larger-cursor"} {...others} />);
}

export default Component;
