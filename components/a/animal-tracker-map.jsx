import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u3qq5jb1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.749 14.083L8 12.5l-5.5 2V6L8 4l6 2l5.5-2v8.5l-.63.229M8 4v8.5M14 6v7.9m1.75 6.35a2.5 1.25 0 1 0 5 0a2.5 1.25 0 1 0-5 0Zm-.25-3.5h.01m2.74-1.25h.01M21 16.75h.01");
}
</style><path class="u3qq5jb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:animal-tracker-map"} {...others} />);
}

export default Component;
