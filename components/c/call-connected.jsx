import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0ev-22sq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.027 16.753C6.685 15.634 2.953 11.41 2.5 5.75C2.5 4 4 2.5 5.75 2.5l2 .5L9 6.5L7.25 7.75c1 2.25 2.25 3.5 4.5 4.5L13 10.5l3.5 1.25l.5 2c0 .686-.23 1.333-.616 1.867M14.75 18l2 2L21 15.75");
}
</style><path class="b0ev-22sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:call-connected"} {...others} />);
}

export default Component;
