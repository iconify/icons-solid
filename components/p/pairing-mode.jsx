import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_ulcfb9d {
  d: path("M9.5 17.5a5.5 5.5 0 1 1 4.25-3.5");
}

.h75x1qbrx {
  d: path("M14.5 6.5a5.5 5.5 0 1 1-4.25 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b_ulcfb9d"/><path class="h75x1qbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pairing-mode"} {...others} />);
}

export default Component;
