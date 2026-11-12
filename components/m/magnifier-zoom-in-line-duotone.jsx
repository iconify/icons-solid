import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5cjgzbpf {
  d: path("M18.2168 18.2178L21.9994 22.0004");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r0xhknb7f {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.xtutonbhb {
  d: path("M9 11.5H11.5M11.5 11.5H14M11.5 11.5V14M11.5 11.5V9");
}
</style><g class="ipq1z-bjh"><path class="xtutonbhb"/><circle class="r0xhknb7f"/><path class="c5cjgzbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-zoom-in-line-duotone"} {...others} />);
}

export default Component;
