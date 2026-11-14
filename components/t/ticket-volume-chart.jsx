import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s78keygyu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h9.9m-8.9 0v-4m3 4v-8m3 8V8m3 4.2V3.5M15.25 15h6.25v1.75a1 1 0 0 0 0 2v1.75h-6.25v-1.75a1 1 0 0 0 0-2Z");
}
</style><path class="s78keygyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ticket-volume-chart"} {...others} />);
}

export default Component;
