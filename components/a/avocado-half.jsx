import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmv_vs5mk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.59 5.755Q15.604 2.25 12 2.25T6.41 5.755Q4.75 8.685 4.75 13q0 3.659 2.009 6.158Q8.845 21.75 12 21.75t5.241-2.592Q19.25 16.659 19.25 13q0-4.315-1.66-7.245M8 14q0-4 4-4q1.657 0 2.828 1.172Q16 12.343 16 14q0 4-4 4t-4-4");
}
</style><path class="tmv_vs5mk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:avocado-half"} {...others} />);
}

export default Component;
