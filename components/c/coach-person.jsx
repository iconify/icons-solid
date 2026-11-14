import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fs1nc7pvk {
  d: path("M12 16.5h4V19h-1.5a2.5 2.5 0 1 1-2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sjq-i3bes {
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 21.5c0-5 4-8.5 9-8.5s9 3.5 9 8.5M12 13v3.5");
}
</style><g class="hntgybcog"><path class="sjq-i3bes"/><path class="fs1nc7pvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coach-person"} {...others} />);
}

export default Component;
