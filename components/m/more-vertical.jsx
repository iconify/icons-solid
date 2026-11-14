import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ij-mcq8wi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0 7.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="ij-mcq8wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:more-vertical"} {...others} />);
}

export default Component;
