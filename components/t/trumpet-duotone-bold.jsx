import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akyaa-boy {
  d: path("M13 11H2v4h11");
}

.gstzuxb9r {
  d: path("M5 7v4");
}

.ldq326b0y {
  d: path("M9 7v4");
}

.nuk2gwb4b {
  d: path("m13 9 6 -6v18l-6 -6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wf7fbvbzh {
  fill: currentColor;
  d: path("m13 9 6 -6v18l-6 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="wf7fbvbzh"/><path class="akyaa-boy"/><path class="nuk2gwb4b"/><path class="gstzuxb9r"/><path class="ldq326b0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:trumpet-duotone-bold"} {...others} />);
}

export default Component;
