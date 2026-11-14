import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wf091-6up {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5v-8c0-2.5 4.75-2.5 4.75 0v8m2.5 0v-11c0-2.5 4.5-2.5 4.5 0v11m2.5 0v-8c0-2.5 4.75-2.5 4.75 0v8M2 18.5h20m-14.75-3h2.5m4.5 0h2.5");
}
</style><path class="wf091-6up"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fuel-farm"} {...others} />);
}

export default Component;
