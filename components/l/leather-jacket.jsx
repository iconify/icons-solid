import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2obf_okd {
  d: path("M8.5 3L6 9l6 4l6-4l-2.5-6M12 13l2.5 8m-8-8.5V21m11-8.5V21");
}

.l5ehqlbxn {
  d: path("M8.5 3L3 5.5L2.5 21h19L21 5.5L15.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l5ehqlbxn"/><path class="d2obf_okd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:leather-jacket"} {...others} />);
}

export default Component;
