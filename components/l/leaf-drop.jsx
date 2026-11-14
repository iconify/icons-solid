import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nzx764iap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5C10 3.5 16 6 17.75 11.75c-6 1-12.25-1.25-14.25-7.25Zm0 0l8 4.25m6.25 5.75S15 17 15 18.75a2.75 2.75 0 0 0 5.5 0c0-1.75-2.75-4.25-2.75-4.25Z");
}
</style><path class="nzx764iap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:leaf-drop"} {...others} />);
}

export default Component;
