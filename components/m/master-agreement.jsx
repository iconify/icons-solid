import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e36hmebgo {
  d: path("M8.5 6V4.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-1");
}

.lc2akmbsj {
  d: path("M6.5 6h6l4 4v9.5a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z");
}

.pur1w1d3c {
  d: path("M7.5 15.5c1-3.5 2.5-3.5 2.75-1c.25 2 1.75 1.5 3.25-1.5m-6 5.5h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e36hmebgo"/><path class="lc2akmbsj"/><path class="pur1w1d3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:master-agreement"} {...others} />);
}

export default Component;
