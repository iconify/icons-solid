import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4qc6w3iz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 3.5l14 6L12 12l-2.5 6.5Zm9.25 14.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0M15 20.5l5.5-5.5");
}
</style><path class="n4qc6w3iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:null-pointer"} {...others} />);
}

export default Component;
