import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.jwbewhi_u {
  fill: currentColor;
  d: path("M11.364 2.932a4.506 4.506 0 0 0-2.6 3.196a4.505 4.505 0 0 0 3.464 5.347a4.504 4.504 0 0 0 4.885-2.245c.489-.894 1.845-.57 1.877.449a9.045 9.045 0 0 1-.195 2.166c-1.035 4.87-5.815 7.98-10.678 6.947c-4.862-1.034-7.964-5.82-6.929-10.69c.974-4.58 5.283-7.644 9.895-7.078c1.008.124 1.21 1.498.28 1.908Z");
}
</style><path class="jwbewhi_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:moon-filled"} {...others} />);
}

export default Component;
