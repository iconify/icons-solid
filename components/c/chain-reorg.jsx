import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emsrzvbwk {
  d: path("m10 7.5l2 2l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydw3i-brb {
  d: path("M2.5 12.5h5v5h-5Zm7 0h5v5h-5Zm7 0h5v5h-5Zm-9 2.5h2m5 0h2M5 9.5c0-5 7-5 7 0");
}
</style><g class="ulnmmdpxh"><path class="ydw3i-brb"/><path class="emsrzvbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chain-reorg"} {...others} />);
}

export default Component;
