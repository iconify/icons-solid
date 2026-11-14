import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mirlutb3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14V4.5c3-1.75 5.5 1.25 8.5 0c2.5-1 4-.75 6 0V14c-2-.75-3.5-1-6 0c-3 1.25-5.5-1.75-8.5 0Zm0 0v7");
}
</style><path class="mirlutb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:build-flags"} {...others} />);
}

export default Component;
