import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.svo38jbaa {
  d: path("m6.5 5l1 16h9l1-16M6.75 9h10.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vq2y_z06k {
  d: path("m13.5 9l2-6.5H13");
}
</style><g class="ulnmmdpxh"><path class="svo38jbaa"/><path class="vq2y_z06k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mango-lassi"} {...others} />);
}

export default Component;
