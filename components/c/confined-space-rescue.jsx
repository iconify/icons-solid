import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e8exvvdkb {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.g_ixqwfmx {
  d: path("M12 6.5v10a2 2 0 0 1-4 0v-1.25");
}

.g8t4nebbt {
  d: path("M2.5 21L12 6.5L21.5 21M12 6.5L16 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e8exvvdkb"/><path class="g8t4nebbt"/><path class="g_ixqwfmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:confined-space-rescue"} {...others} />);
}

export default Component;
