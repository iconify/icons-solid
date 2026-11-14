import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ncp2-gmcj {
  d: path("M8.5 13.5L12 10l3.5 3.5V18h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4vofccge {
  d: path("M5.5 2.5h13v19h-13Zm5 3h3");
}
</style><g class="ulnmmdpxh"><path class="v4vofccge"/><path class="ncp2-gmcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:guest-app"} {...others} />);
}

export default Component;
