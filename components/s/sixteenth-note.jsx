import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhza-zbrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.99 19.37a4 2.9-20 1 0 7.52-2.74a4 2.9-20 1 0-7.52 2.74m7.52-2.74V2.75m0 0c0 2.75 4.75 3.5 4.75 7m-4.75-3c0 2.75 4.75 3.5 4.75 7");
}
</style><path class="zhza-zbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sixteenth-note"} {...others} />);
}

export default Component;
