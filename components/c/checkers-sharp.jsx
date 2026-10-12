import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d8mt2_n-r {
  cx: 12px;
  cy: 12px;
  r: 6.25px;
}

.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.vj_6e8bny {
  d: path("m9.67 13.26l-.34-2.27l-.08-.49l.38.32l.74.61l.38.32l.26-.42l.73-1.16l.26-.42l.26.42l.73 1.16l.26.42l.38-.32l.74-.61l.38-.32l-.08.49l-.34 2.27l-.08.49h-4.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><circle class="d8mt2_n-r"/><path class="vj_6e8bny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:checkers-sharp"} {...others} />);
}

export default Component;
