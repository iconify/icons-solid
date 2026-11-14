import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oywp2su2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5a9.5 9 0 0 1 19 0a2.375 1.75 0 0 0-4.75 0a2.375 1.75 0 0 0-4.75 0a2.375 1.75 0 0 0-4.75 0a2.375 1.75 0 0 0-4.75 0Zm9.5 0v6a2 2 0 0 1-4 0");
}
</style><path class="oywp2su2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kids-umbrella"} {...others} />);
}

export default Component;
