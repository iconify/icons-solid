import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fk_szrbck {
  cx: 17.25px;
  cy: 18.75px;
  r: 2.25px;
}

.m0ydh5bsj {
  cx: 6.75px;
  cy: 5.25px;
  r: 2.25px;
}

.mtl-gzbxy {
  cx: 6.75px;
  cy: 18.75px;
  r: 2.25px;
}

.tjbqj9blr {
  d: path("M6.75 7.5v9m10.5-4.25v4.25m-2.5-12.75l5 5m0-5l-5 5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="m0ydh5bsj"/><circle class="mtl-gzbxy"/><circle class="fk_szrbck"/><path class="tjbqj9blr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pull-request-closed-sharp"} {...others} />);
}

export default Component;
