import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4r8jac8l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1 5C1 4.4477 1.4477 4 2 4L22 4C22.5523 4 23 4.4477 23 5L23 19C23 19.5523 22.5523 20 22 20L2 20C1.4477 20 1 19.5523 1 19L1 5ZM5 9.5L5 14.5L7 14.5L7 9.5L5 9.5Z");
}
</style><path clip-rule="evenodd" class="d4r8jac8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-horizontal-sharp-fill"} {...others} />);
}

export default Component;
