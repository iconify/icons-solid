import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.phnhavb1h {
  d: path("M4 19.75v-8A1.75 1.75 0 0 1 5.75 10h2A1.75 1.75 0 0 0 9.5 8.25v-4a1.75 1.75 0 0 1 1.75-1.75h7A1.75 1.75 0 0 1 20 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 19.75M13 6.5v6m3.5-6v6");
}

.wyi2sgbkk {
  d: path("M13 21.5V17h3.5v4.5");
}
</style><g class="hntgybcog"><path class="phnhavb1h"/><path class="wyi2sgbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-office"} {...others} />);
}

export default Component;
