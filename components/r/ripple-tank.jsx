import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b08tpdhzr {
  d: path("M6 14q1.5-2 3 0t3 0t3 0t3 0M12 3S9.75 5.75 9.75 7.25a2.25 2.25 0 0 0 4.5 0C14.25 5.75 12 3 12 3Z");
}

.i3dfkobbj {
  d: path("M3 6v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i3dfkobbj"/><path class="b08tpdhzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ripple-tank"} {...others} />);
}

export default Component;
