import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-g5gobjz {
  d: path("M8.25 12h7.5M12 12v4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jx412ibya {
  d: path("M10 6.75c-.6-.9.6-1.85 0-2.75m4 2.75c-.6-.9.6-1.85 0-2.75");
}

.n576llklg {
  width: 5.5px;
  height: 5.5px;
  x: 2.75px;
  y: 9.25px;
  rx: 1.25px;
}

.tg485bcen {
  width: 5.5px;
  height: 5.5px;
  x: 15.75px;
  y: 9.25px;
  rx: 1.25px;
}

.tyhetpb4e {
  cx: 12px;
  cy: 18.75px;
  r: 2.25px;
}
</style><g class="hntgybcog"><rect class="n576llklg"/><rect class="tg485bcen"/><path class="c-g5gobjz"/><circle class="tyhetpb4e"/><path class="jx412ibya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:packet-sniff"} {...others} />);
}

export default Component;
