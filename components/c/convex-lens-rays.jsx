import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.as4vzu3je {
  d: path("M8.5 3q4 9 0 18q-4-9 0-18Z");
}

.ev2a68btr {
  d: path("M3.5 7.5h5l12 4.5m-17 4.5h5l12-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="as4vzu3je"/><path class="ev2a68btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:convex-lens-rays"} {...others} />);
}

export default Component;
