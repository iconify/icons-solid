import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ijr-zmf5r {
  d: path("M9.5 21v-4.5h5V21");
}

.kkv-c4rbd {
  d: path("M3.5 11h17v10h-17Zm8.5 0V2.5m0 0h6l-1.5 2.25L18 7h-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kkv-c4rbd"/><path class="ijr-zmf5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-embassy"} {...others} />);
}

export default Component;
