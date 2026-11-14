import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qn2w0ub2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h2v9.5h-2Zm2 1h7v7.5h-7Zm7 2.25l2.5-1v5l-2.5-1Zm4 1.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM13.75 20.5a2.5 2.5 0 0 1-.25-5a3 3 0 0 1 5.5-.75a2.75 2.75 0 0 1-.25 5.75Z");
}
</style><path class="qn2w0ub2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fog-cannon"} {...others} />);
}

export default Component;
