import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.biifgnb1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15.5h14v3H5Zm-1.5 6h17m-12-9L7 10m5 2.5v-3m3.5 3L17 10M7 4.5h10m-8-2l-2 2l2 2m6-4l2 2l-2 2");
}
</style><path class="biifgnb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sprinkler-oscillating"} {...others} />);
}

export default Component;
