import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6hojac8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M8.5 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m1 3.5h5M12 13v7m-9 0l2-4.5L7 20m10 0l2-4.5l2 4.5");
}
</style><path class="a6hojac8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:golf-tee-box"} {...others} />);
}

export default Component;
