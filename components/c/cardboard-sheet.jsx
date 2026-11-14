import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.coibfaczt {
  d: path("M8.75 8q1.5-1.5 3 0t3 0t3 0M7.5 12q1.5-1.5 3 0t3 0t3 0M6.25 16q1.5-1.5 3 0t3 0t3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p9rc9rbor {
  d: path("M8.347 3.5h10.879a1.75 1.75 0 0 1 1.692 2.198l-3.573 13.5a1.75 1.75 0 0 1-1.692 1.302H4.774a1.75 1.75 0 0 1-1.692-2.198l3.573-13.5A1.75 1.75 0 0 1 8.347 3.5");
}
</style><g class="hntgybcog"><path class="p9rc9rbor"/><path class="coibfaczt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cardboard-sheet"} {...others} />);
}

export default Component;
