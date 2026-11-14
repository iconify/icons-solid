import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qtxpg0baa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5c4 0 5.5-1.5 8-2.5S14 4.5 17 4c2-.25 3.5-1 4.5-1.5M2.5 12C6 12 8 13 11 12s5.5.5 10.5 0m-19 1.5c4 0 5.5 1.5 8 2.5s3.5 3.5 6.5 4c2 .25 3.5 1 4.5 1.5");
}
</style><path class="qtxpg0baa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nerve"} {...others} />);
}

export default Component;
