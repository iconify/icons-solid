import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q7xtx_x3w {
  cx: 12px;
  cy: 17.5px;
  r: 1.5px;
}

.qt4afwy9g {
  d: path("M6.5 12h11");
}

.wertabc3z {
  cx: 12px;
  cy: 6.5px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qt4afwy9g"/><circle class="wertabc3z"/><circle class="q7xtx_x3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:divide-sign-sharp"} {...others} />);
}

export default Component;
