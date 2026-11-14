import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kobw23-am {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.625 4h3.25A2.625 2.625 0 0 1 10.5 6.625v10.75A2.625 2.625 0 0 1 7.875 20h-3.25A2.625 2.625 0 0 1 2 17.375V6.625A2.625 2.625 0 0 1 4.625 4m11.5 0h3.25A2.625 2.625 0 0 1 22 6.625v10.75A2.625 2.625 0 0 1 19.375 20h-3.25a2.625 2.625 0 0 1-2.625-2.625V6.625A2.625 2.625 0 0 1 16.125 4M4.5 12H8m9.75-2v4m-2-2h4");
}
</style><path class="kobw23-am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:visual-diff"} {...others} />);
}

export default Component;
