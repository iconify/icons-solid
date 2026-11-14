import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_-0g5b_r {
  d: path("M12 10c-2.5-3.5-5.5-3.5-5.5-.75C6.5 11.25 9 12 12 12c-2.5.5-4 2.5-3.25 4c.75 1.25 2.25.5 3.25-1.5m0-4.5c2.5-3.5 5.5-3.5 5.5-.75c0 2-2.5 2.75-5.5 2.75c2.5.5 4 2.5 3.25 4c-.75 1.25-2.25.5-3.25-1.5m0-7v9");
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="y_-0g5b_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:butterfly-specimen"} {...others} />);
}

export default Component;
