import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mj3tckbjz {
  d: path("M6 19.5a9 9 0 1 1 12 0Z");
}

.s8q0sqbdm {
  d: path("M7.5 7.5h9A1.5 1.5 0 0 1 18 9v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 14V9a1.5 1.5 0 0 1 1.5-1.5Zm2 5.25l2.25-2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mj3tckbjz"/><path class="s8q0sqbdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:space-helmet-visor"} {...others} />);
}

export default Component;
