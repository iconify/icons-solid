import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iv719kj6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17c-.5-4-.25-7.25 2-8.25c.5-2.25 3.5-2.25 4 0c.25 1.25 1 1.75 2.5 1.75h5.75a2.5 2.5 0 1 1 0 2.75H10C8 13.25 7 15 7 17m-.25-7h.01");
}
</style><path class="iv719kj6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gharial"} {...others} />);
}

export default Component;
