import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lk8u8k3wy {
  d: path("m2.5 20.5l9.5-13l9.5 13Zm9.5-18v5m0-5L15.5 4L12 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9cv2hk7p {
  d: path("M8.5 20.5L12 13l3.5 7.5");
}
</style><g class="ulnmmdpxh"><path class="lk8u8k3wy"/><path class="x9cv2hk7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:festival-tent"} {...others} />);
}

export default Component;
