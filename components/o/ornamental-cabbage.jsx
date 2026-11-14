import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lfrqapboi {
  d: path("M10.5 12.5a1.5 1.5 0 0 1 3 0a3 3 0 0 1-6 0a4.5 4.5 0 0 1 9 0");
}

.r2hqyubah {
  d: path("M12 20a5 5 0 0 1-7.25-5.25A5 5 0 0 1 7.5 6.5a5 5 0 0 1 9 0a5 5 0 0 1 2.75 8.25A5 5 0 0 1 12 20Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r2hqyubah"/><path class="lfrqapboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ornamental-cabbage"} {...others} />);
}

export default Component;
