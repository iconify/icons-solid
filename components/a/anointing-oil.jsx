import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q-0bnj2sh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 12v1.5a4.25 4.25 0 1 0 3 0V12M10 10h4v2h-4Zm2-8s2 2.25 2 3.25a2 2 0 0 1-4 0c0-1 2-3.25 2-3.25Z");
}
</style><path class="q-0bnj2sh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:anointing-oil"} {...others} />);
}

export default Component;
