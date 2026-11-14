import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-56kqphr {
  d: path("m17 9.75l2 2l2-2M8.75 18H7.5A2.5 2.5 0 0 1 5 15.5v-3.25");
}

.quk2js0hl {
  d: path("M2.5 2.5h10v7h-10Zm9 12h10v7h-10ZM15 6h1.5A2.5 2.5 0 0 1 19 8.5v3.25");
}

.qykzcgbau {
  d: path("m3 14.25l2-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="quk2js0hl"/><path class="f-56kqphr"/><path class="qykzcgbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:business-card-swap"} {...others} />);
}

export default Component;
