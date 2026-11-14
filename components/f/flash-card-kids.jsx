import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c85j5tb5h {
  d: path("M9.375 2.5h5.25A4.375 4.375 0 0 1 19 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125V6.875A4.375 4.375 0 0 1 9.375 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zw5tym9hl {
  d: path("m13.296 7.721l.888 1.523a1.5 1.5 0 0 1-1.296 2.256h-1.776a1.5 1.5 0 0 1-1.296-2.256l.888-1.523a1.5 1.5 0 0 1 2.592 0M12 11.5v3m-3 3.25h6");
}
</style><g class="hntgybcog"><path class="c85j5tb5h"/><path class="zw5tym9hl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flash-card-kids"} {...others} />);
}

export default Component;
