import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_nazh8gr {
  d: path("m6.5 7.5l4 2.25v4.5l-4 2.25l-4-2.25v-4.5Z");
}

.zh8stpdcj {
  d: path("m2.5 9.75l4 2.25l4-2.25M6.5 12v4.5m6.75-4.5H17m-2-2l2 2l-2 2m5-7h.01M20 12h.01M20 17h.01");
}
</style><g class="ulnmmdpxh"><path class="y_nazh8gr"/><path class="zh8stpdcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:embedding-model"} {...others} />);
}

export default Component;
