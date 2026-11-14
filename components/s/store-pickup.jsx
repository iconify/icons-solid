import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nnsffcbyt {
  d: path("M18 18.25a1.75 1.75 0 0 1 0-3.5");
}

.pgk0knbpn {
  d: path("m3 9l1.5-5h15L21 9M4.5 11v9.5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmo2ehbpz {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0m-6.5 7.5h7v5h-7Z");
}
</style><g class="ulnmmdpxh"><path class="pgk0knbpn"/><path class="vmo2ehbpz"/><path class="nnsffcbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:store-pickup"} {...others} />);
}

export default Component;
