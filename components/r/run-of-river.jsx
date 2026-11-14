import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eclq2vbmh {
  d: path("M3.5 13.25a8.5 8.5 0 0 1 17 0M12 4.75v8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jue--d_rz {
  d: path("m6 7.25l6 6l6-6M2.5 17.75q2.375-2.5 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><g class="hntgybcog"><path class="eclq2vbmh"/><path class="jue--d_rz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:run-of-river"} {...others} />);
}

export default Component;
