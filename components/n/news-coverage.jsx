import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sqhqkbgqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20.5h14a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v13a2 2 0 0 1-4 0v-9h4m3-2h8m-8 4h8m-8 4h5");
}
</style><path class="sqhqkbgqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:news-coverage"} {...others} />);
}

export default Component;
