import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kvc8acc4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5h11.5v3.75h-6.25A5.5 5.5 0 1 1 9 8.5ZM9 14h.01M12 2.5v2.75M6.25 3.5L7.5 5.75M17.75 3.5L16.5 5.75");
}
</style><path class="kvc8acc4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:foul"} {...others} />);
}

export default Component;
