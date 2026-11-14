import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h4p2jqpsn {
  d: path("M7 17h10v3.5M7 14h8.5a1.5 1.5 0 0 1 1.5 1.5V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9omiybac {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Zm3.5 2v8");
}
</style><g class="ulnmmdpxh"><path class="x9omiybac"/><path class="h4p2jqpsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-guesthouse"} {...others} />);
}

export default Component;
