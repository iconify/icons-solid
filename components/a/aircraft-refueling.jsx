import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6isqwbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.229 12H14l-4.5 6.5h-2L10 12H6l-2 2.5H2.5l1-4l-1-4H4L6 9h4L7.5 2.5h2L14 9h5c1.25 0 2.5.5 2.5 1.5c0 .679-.577 1.128-1.338 1.346M18.75 14.75c1 1.5 2.75 2.75 2.75 4a2.75 2.75 0 0 1-5.5 0c0-1.25 1.75-2.5 2.75-4Z");
}
</style><path class="t6isqwbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aircraft-refueling"} {...others} />);
}

export default Component;
