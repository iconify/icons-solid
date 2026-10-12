import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aemasgwuc {
  cx: 14px;
  cy: 11.5px;
  r: 2px;
}

.c9x1hpblo {
  d: path("M5 21v-9.5h4a5 5 0 0 0 10 0");
}

.elj7lmb0r {
  cx: 9.5px;
  cy: 5.5px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="elj7lmb0r"/><path class="c9x1hpblo"/><circle class="aemasgwuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:nursing-mother-sharp"} {...others} />);
}

export default Component;
