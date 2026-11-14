import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nlmqvi88z {
  d: path("M8 8a4 5.25 0 1 0 8 0a4 5.25 0 1 0-8 0Zm.25 3.75L3 17m14-4.25l2.5 4.75l-2 2l-4.75-2.5Z");
}

.rbp6rfyan {
  d: path("M18 19.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nlmqvi88z"/><path class="rbp6rfyan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:badminton-racket-shuttle"} {...others} />);
}

export default Component;
