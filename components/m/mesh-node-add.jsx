import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bid4wsv7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM2 16a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm14-6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM9.75 7.25l-4 6.5m7.5-7.5l3 2M6.75 15l9.5-4.5M18 15v6m-3-3h6");
}
</style><path class="bid4wsv7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mesh-node-add"} {...others} />);
}

export default Component;
