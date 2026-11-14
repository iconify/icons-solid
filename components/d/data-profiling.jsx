import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f0a5_1dcz {
  fill: currentColor;
  d: path("M13 8V5h1.75v3Zm3.25 0V2.5H18V8Zm3 0V6H21v2Z");
}

.laiyn8mjf {
  d: path("M3 10.5h18v11H3Zm9 0v11m-9-7.25h18m-18 3.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="laiyn8mjf"/><path class="f0a5_1dcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:data-profiling"} {...others} />);
}

export default Component;
