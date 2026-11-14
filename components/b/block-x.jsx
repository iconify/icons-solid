import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_4sgrb4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.41 4.458L12 2.5L20.25 7v9.303m-4.655 3.236L12 21.5L3.75 17V7.692m10.447 2.61L20.25 7M12 15.9v5.6m-8.5-18l17 17");
}
</style><path class="j_4sgrb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:block-x"} {...others} />);
}

export default Component;
