import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bz1nryb9o {
  d: path("M20 7.5h-3.5a2 2 0 0 0 0 4H20m-2 3.25v3.5M18 21h.01");
}

.rv0r7s4pu {
  d: path("M15.2 18H2.5V4H20v7.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rv0r7s4pu"/><path class="bz1nryb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crypto-wallet-alert"} {...others} />);
}

export default Component;
