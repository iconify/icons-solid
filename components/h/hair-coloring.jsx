import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lffd_v9wc {
  d: path("m9.677 5.891l3.182 3.182l-3.536 3.536l-3.182-3.182ZM11.25 7.5l5-5m-8.75 13h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vw1395tua {
  d: path("M3 12.5h18c0 5-4 8-9 8s-9-3-9-8Z");
}
</style><g class="ulnmmdpxh"><path class="vw1395tua"/><path class="lffd_v9wc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hair-coloring"} {...others} />);
}

export default Component;
