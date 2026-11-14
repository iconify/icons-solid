import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fl13b0boy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5V14l2-3.5H8l2 3h1a1 1 0 0 1 1 1v3h-1a1.75 1.75 0 0 1-3.5 0h-1a1.75 1.75 0 0 1-3.5 0zm19 0V14l-2-3.5H16l-2 3h-1a1 1 0 0 0-1 1v3h1a1.75 1.75 0 0 0 3.5 0h1a1.75 1.75 0 0 0 3.5 0zM12 3v5M7.5 4.75l1.75 3m7.25-3l-1.75 3");
}
</style><path class="fl13b0boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:car-crash"} {...others} />);
}

export default Component;
