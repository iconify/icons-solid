import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qcz3hdwqx {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-4.86-7.14l-3 3.86L9 13.14L6 17h12z");
}

.x9ph6yocg {
  fill: currentColor;
  d: path("M5 19h14V5H5zm4-5.86l2.14 2.58l3-3.87L18 17H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="x9ph6yocg"/><path class="qcz3hdwqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-image"} {...others} />);
}

export default Component;
