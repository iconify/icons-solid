import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rh9o5xb5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5a9.5 7 0 0 1 19 0c-1-1-3.25-1-4.25 0c-1-1-4.25-1-5.25 0c-1-1-4.25-1-5.25 0c-1-1-3.25-1-4.25 0ZM12 21c-3.5-2-4.5-4-4.5-5.75c0-1.5 1-2.5 2.25-2.5c1 0 1.75.5 2.25 1.25c.5-.75 1.25-1.25 2.25-1.25c1.25 0 2.25 1 2.25 2.5C16.5 17 15.5 19 12 21Z");
}
</style><path class="rh9o5xb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:life-insurance-benefit"} {...others} />);
}

export default Component;
