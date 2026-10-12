import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fq579k0je {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75v5.5h5.5M10.75 12h2.5a2.5 2.5 0 0 1 0 5h-2.5a2.5 2.5 0 0 1 0-5Z");
}

.s43l187bp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xk_re97fp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.75 14.5h.01");
}
</style><g class="ux2u0rbkq"><path class="s43l187bp"/><path class="fq579k0je"/><path class="xk_re97fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:config-sharp"} {...others} />);
}

export default Component;
