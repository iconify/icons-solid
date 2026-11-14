import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebh2jvmxa {
  d: path("M3.5 4h12v7h-12Zm12 1.5l5-1.5v7l-5-1.5Zm-6 5.5v10.5m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ya8y-26kf {
  fill: currentColor;
  d: path("M7 7.5h.01");
}
</style><g class="ulnmmdpxh"><path class="ebh2jvmxa"/><path class="ya8y-26kf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-speed-camera"} {...others} />);
}

export default Component;
