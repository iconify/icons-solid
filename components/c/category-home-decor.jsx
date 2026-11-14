import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0pbe0bmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10h5m-4 0v2.75C5 13.75 5 21.5 10 21.5h4c5 0 5-7.75-.5-8.75V10M12 2v8m0-4.75c-2.5 0-4.5-.75-5-2.75c2.5 0 4.5.75 5 2.75m0 2c2.5 0 4.5-1 5-3c-2.5 0-4.5 1-5 3");
}
</style><path class="c0pbe0bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-home-decor"} {...others} />);
}

export default Component;
