import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0mom9hao {
  d: path("M5 20V5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5V20M3 20h18M5 7.5h14");
}

.qtyjmzxew {
  d: path("M9.5 15.5h5L14 20h-4Zm2.5 0V12m0 1.5q-3 0-3.5-3q3 0 3.5 3m0-1q3 0 3.5-2q-3-.5-3.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a0mom9hao"/><path class="qtyjmzxew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:window-sill-plant"} {...others} />);
}

export default Component;
