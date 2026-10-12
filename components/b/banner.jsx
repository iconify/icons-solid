import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekpyzob7n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 12h7.25");
}

.if3xfnbtz {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 6.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.np6vonbsu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9.5v3");
}

.q_nfnc6mi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 15h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="if3xfnbtz"/><path class="np6vonbsu"/><path class="q_nfnc6mi"/><path class="ekpyzob7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:banner"} {...others} />);
}

export default Component;
