import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anwb0zq2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 21c0-4.5 3.5-6.5 7.5-6.5c.682 0 1.349.058 1.987.177M18 21.25l-2.5-2.75a1.75 1.75 0 1 1 2.5-2.25a1.75 1.75 0 1 1 2.5 2.25Z");
}
</style><path class="anwb0zq2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:customer-health"} {...others} />);
}

export default Component;
