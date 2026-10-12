import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eadps1bth {
  d: path("M4.75 4.25h14.5M4.75 12.5h14.5M4.75 4.25v16.5m4.83-16.5V6.8m0 3.2v10.75m4.84-16.5V15m0 3.2v2.55m4.83-16.5v16.5");
}

.mblugibxw {
  cx: 14.42px;
  cy: 16.6px;
  r: 1.6px;
}

.wmqzadcel {
  cx: 9.58px;
  cy: 8.4px;
  r: 1.6px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="eadps1bth"/><circle class="wmqzadcel"/><circle class="mblugibxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chord-chart-sharp"} {...others} />);
}

export default Component;
