import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0qzk-bpf {
  d: path("M19 10h-5l-4 4v6h10v-9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rcb0dgbps {
  d: path("M16 4h-5L7 8v6h10V5");
}
</style><g class="nrj6p8qat"><path class="rcb0dgbps"/><path class="e0qzk-bpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mcp-prompt-list-outline-regular"} {...others} />);
}

export default Component;
