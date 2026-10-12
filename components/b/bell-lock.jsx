import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jf0axzbmx {
  cx: 17.5px;
  cy: 17.5px;
  r: 6px;
}

.llr7g47-l {
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25a6 6 0 0 0-6 6v3.6c0 .7-.25 1.4-.7 1.95l-.6.75c-.6.75-.1 1.95.9 1.95h12.8c1 0 1.5-1.2.9-1.95l-.6-.75c-.45-.55-.7-1.25-.7-1.95v-3.6a6 6 0 0 0-6-6");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.t_2lkqbxb {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tk08jrbzk {
  width: 5.5px;
  height: 4px;
  x: 14.75px;
  y: 17px;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.u46xc4iak {
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 17v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><mask id="SVGsZ1vtcCp" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path class="py7ktqbvf"/><circle class="jf0axzbmx"/></mask><g class="t_2lkqbxb"><g mask="url(#SVGsZ1vtcCp)"><path class="llr7g47-l"/></g><rect class="tk08jrbzk"/><path class="u46xc4iak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bell-lock"} {...others} />);
}

export default Component;
