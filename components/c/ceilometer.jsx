import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q21wkx4as {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10h8a2.75 2.75 0 0 0 0-5.5a4 4 0 0 0-7.25.75A2.5 2.5 0 0 0 8 10Zm-2.5 8h13v3.5h-13Zm6.5 0v-5m-2.25 2.25L12 13l2.25 2.25");
}
</style><path class="q21wkx4as"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ceilometer"} {...others} />);
}

export default Component;
