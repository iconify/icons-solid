import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3u1o5fbg {
  d: path("M6.5 3.5h11l-2 13h-7Zm3 13h5v4h-5Z");
}

.l51r0lxwx {
  d: path("M10 10c0-1.5 2-1.5 2 0s2 1.5 2 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e3u1o5fbg"/><path class="l51r0lxwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:depilatory-cream"} {...others} />);
}

export default Component;
