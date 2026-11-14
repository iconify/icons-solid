import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qnmownb0r {
  d: path("M12.27 19.285L11 20l-8-4.5V7l8-4.5L19 7v5.721");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zz8_50xgn {
  d: path("m3 7l8 4.5L19 7m-8 4.5V20m7 1.5l-3-3a1.75 1.75 0 0 1 3-2.25a1.75 1.75 0 0 1 3 2.25Z");
}
</style><g class="ulnmmdpxh"><path class="qnmownb0r"/><path class="zz8_50xgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:container-health"} {...others} />);
}

export default Component;
