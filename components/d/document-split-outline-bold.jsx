import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp9na9-yx {
  d: path("M10 3H4v16h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vl0d0wtss {
  d: path("M14 5h6v16h-6");
}
</style><g class="s0phu2bbs"><path class="bp9na9-yx"/><path class="vl0d0wtss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-split-outline-bold"} {...others} />);
}

export default Component;
