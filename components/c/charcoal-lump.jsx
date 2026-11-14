import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8ozutefj {
  d: path("M3 14.5L5.5 8L12 4l5.5 1.5L21 12l-1 5l-6 3.5l-8-1Z");
}

.kry71abgk {
  d: path("m5.5 8l5 4.5l3.5 8m1.5-9l2-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g8ozutefj"/><path class="kry71abgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:charcoal-lump"} {...others} />);
}

export default Component;
