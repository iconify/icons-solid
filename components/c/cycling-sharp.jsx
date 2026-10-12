import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fj3hxh99x {
  d: path("m9.5 9l2.75-2l3 2.25");
}

.ms5r761_l {
  d: path("M2.75 15.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m12 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.scnbu1ijv {
  d: path("m6 15.75l5-5l1 5m-1-5h4l3 5");
}

.udg90ctvs {
  cx: 15.5px;
  cy: 4.5px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ms5r761_l"/><path class="scnbu1ijv"/><circle class="udg90ctvs"/><path class="fj3hxh99x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cycling-sharp"} {...others} />);
}

export default Component;
