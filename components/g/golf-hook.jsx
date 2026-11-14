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

.vtrq3hbho {
  d: path("M9 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3.5-5.75C14.5 9.5 16 5.5 8 5");
}

.w118l0p0e {
  d: path("M10 3L7.5 5L10 7");
}
</style><g class="ulnmmdpxh"><path class="vtrq3hbho"/><path class="w118l0p0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:golf-hook"} {...others} />);
}

export default Component;
