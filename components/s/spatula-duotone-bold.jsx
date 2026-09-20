import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7_9wnfxj {
  fill: currentColor;
  d: path("M6 6h12v7H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e7fjltb5i {
  d: path("M12 13v8");
}

.gvgmi5cyl {
  d: path("M6 6h12v7H6Z");
}

.mcs12xbpj {
  d: path("M10 8v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ubusnobws {
  d: path("M14 8v3");
}
</style><g class="s0phu2bbs"><path class="a7_9wnfxj"/><path class="gvgmi5cyl"/><path class="mcs12xbpj"/><path class="ubusnobws"/><path class="e7fjltb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:spatula-duotone-bold"} {...others} />);
}

export default Component;
