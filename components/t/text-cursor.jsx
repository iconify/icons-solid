import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jlj7a6hhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.75C10.5 3.75 12 4.5 12 6v12c0 1.5-1.5 2.25-3.25 2.25m6.5-16.5C13.5 3.75 12 4.5 12 6v12c0 1.5 1.5 2.25 3.25 2.25M9.5 12h5");
}
</style><path class="jlj7a6hhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:text-cursor"} {...others} />);
}

export default Component;
