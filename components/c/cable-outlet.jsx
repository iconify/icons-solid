import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1dhuiges {
  d: path("M3.5 2.5h17v16h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgqn_0f_u {
  d: path("M8 7h8v5.5h-1.5V14h-5v-1.5H8Zm4 7v7.5");
}
</style><g class="ulnmmdpxh"><path class="e1dhuiges"/><path class="zgqn_0f_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cable-outlet"} {...others} />);
}

export default Component;
