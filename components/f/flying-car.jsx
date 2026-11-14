import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n9b1sgouk {
  d: path("M3 16.5V14l3-3h7l3.5 2.5h3c1 0 1.5.5 1.5 1.25v1.75Z");
}

.s1ibjlbqs {
  d: path("M7.966 11h.784a.961.961 0 0 0 .81-1.476L7.442 6.195A1.5 1.5 0 0 0 6.177 5.5H5.75a.805.805 0 0 0-.733 1.138L6.6 10.121A1.5 1.5 0 0 0 7.966 11M5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="n9b1sgouk"/><path class="s1ibjlbqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flying-car"} {...others} />);
}

export default Component;
