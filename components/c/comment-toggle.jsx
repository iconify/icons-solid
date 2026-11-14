import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gaqwr-imk {
  d: path("M10 6.5L7.5 9l2.5 2.5m4-5L16.5 9L14 11.5m.5 10.5l3.25-8.5m1 8.5L22 13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2oti_bee {
  d: path("M11.7 21.5H4.5v-19h15v8.7");
}
</style><g class="ulnmmdpxh"><path class="w2oti_bee"/><path class="gaqwr-imk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:comment-toggle"} {...others} />);
}

export default Component;
