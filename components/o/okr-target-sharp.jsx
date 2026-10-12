import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayk-facnc {
  cx: 12px;
  cy: 8.5px;
  r: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jfxr4h1vm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 17.5h14.5M4.75 21h8.5");
}

.nntrnih8q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8.5h.01");
}

.uut79hbqy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 1 0 0-5.5Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="ayk-facnc"/><path class="uut79hbqy"/><path class="nntrnih8q"/><path class="jfxr4h1vm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:okr-target-sharp"} {...others} />);
}

export default Component;
