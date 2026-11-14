import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jzvxy1bag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21c-2-1.25-5.5-1.75-9.5-1.25V12.5c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5v7.25c-4-.5-7.5 0-9.5 1.25Zm0-7v7m1.75-18a3.5 3.5 0 1 0 1.75 5.25A3.25 3.25 0 0 1 13.75 3Z");
}
</style><path class="jzvxy1bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bedtime-story"} {...others} />);
}

export default Component;
