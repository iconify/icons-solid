import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f2s9bwu9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.323 19.385L9 18l-6 2.5V6l6-2.5L15 6l6-2.5v9.4M9 3.5V18m6-12v3.25M14.75 18l2 2L21 15.75");
}
</style><path class="f2s9bwu9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-check"} {...others} />);
}

export default Component;
