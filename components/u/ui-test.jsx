import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5bvvkbot {
  d: path("M12.5 18h-10V3h19v9.1m0 5.3v.6h-1.3");
}

.u6v1tzb-n {
  d: path("M9.8 9.5H5.5V6h7v2.6m1 3.4l7 2.75l-3 1.5l-1.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o5bvvkbot"/><path class="u6v1tzb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ui-test"} {...others} />);
}

export default Component;
