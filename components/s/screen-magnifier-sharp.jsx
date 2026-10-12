import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.joijmw2ee {
  d: path("m19.45 18.45l1.8 1.8m-5-3.75h2.5m-1.25-1.25v2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yll19rl6b {
  d: path("M2.75 3.75h12v9.5h-12zm6 9.5v3.5m-3 0h6");
}

.znr0jubqw {
  cx: 17.5px;
  cy: 16.5px;
  r: 2.75px;
}
</style><g class="x2cwu0gfd"><path class="yll19rl6b"/><circle class="znr0jubqw"/><path class="joijmw2ee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:screen-magnifier-sharp"} {...others} />);
}

export default Component;
