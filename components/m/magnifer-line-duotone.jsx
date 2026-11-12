import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4dyhhbeb {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
  stroke: var(--svg-color--gray, gray);
}

.fo97hvbjm {
  stroke: var(--svg-color--fff, #fff);
  stroke-linecap: round;
  d: path("M18.5 18.5L22 22");
}

.k2u665ban {
  fill: none;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w49j0rbvv {
  fill: currentColor;
  d: path("M0 0h24v24H0z");
}
</style><defs><mask id="SVGcfiNQVot"><g class="k2u665ban"><circle class="b4dyhhbeb"/><path class="fo97hvbjm"/></g></mask></defs><path mask="url(#SVGcfiNQVot)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifer-line-duotone"} {...others} />);
}

export default Component;
