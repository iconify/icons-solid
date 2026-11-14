import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itx-l2b8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.076 8.666l3.618 6.664a3.5 3.5 0 0 1-3.076 5.17H8.382a3.5 3.5 0 0 1-3.076-5.17l3.618-6.664a3.5 3.5 0 0 1 6.152 0M12 9.5V14m0 3.25h.01");
}
</style><path class="itx-l2b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:alert-level-red"} {...others} />);
}

export default Component;
