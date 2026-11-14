import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1pm7ybsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M12.75 5.25a1 1 0 1 1 .5 1.5A1 1 0 1 1 12 7.5a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0M12 7.5V20m-5.75-8a1 1 0 1 1 .5 1.5a1 1 0 1 1-1.25.75a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0m-.75 2.25V20m13.75-9.5a1 1 0 1 1 .5 1.5a1 1 0 1 1-1.25.75a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0m-.75 2.25V20");
}
</style><path class="j1pm7ybsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flower-field"} {...others} />);
}

export default Component;
