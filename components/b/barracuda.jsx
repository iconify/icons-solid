import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqvbgjbpn {
  d: path("m12.5 9.25l2-2.25l1 3");
}

.hc46y56yr {
  d: path("M2.5 9.5C7 8.5 13 8.75 18 11l3.5-2.5v7L18 13c-5 2.25-10 2-12.5.5l-2.5 1L8 12l-1.25-1l-.75.5l-1.25-1.25L4 11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hc46y56yr"/><path class="cqvbgjbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:barracuda"} {...others} />);
}

export default Component;
