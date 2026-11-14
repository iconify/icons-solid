import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gc-093b0l {
  d: path("m13.538 5.833l6.559 12.082a1.75 1.75 0 0 1-1.538 2.585H5.441a1.75 1.75 0 0 1-1.538-2.585l6.559-12.082a1.75 1.75 0 0 1 3.076 0");
}

.hc2nixbyh {
  d: path("M12 9s-1.75 2.5-1.75 3.5a1.75 1.75 0 0 0 3.5 0C13.75 11.5 12 9 12 9m-4 8.25h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gc-093b0l"/><path class="hc2nixbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:warning-corrosive"} {...others} />);
}

export default Component;
