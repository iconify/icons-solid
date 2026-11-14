import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b8hc43bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h4V7h-4Zm13 0h4V7h-4ZM5.5 7v1c0 3 6.5 2.5 6.5 6v2.5M18.5 7v1c0 3-6.5 2.5-6.5 6m-2 2.5h4v5h-4Z");
}
</style><path class="b8hc43bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cable-split"} {...others} />);
}

export default Component;
