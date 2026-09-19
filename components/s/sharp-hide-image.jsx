import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qh_rg7z4b {
  fill: currentColor;
  d: path("M21 3H5.83L21 18.17zM2.81 2.81L1.39 4.22L3 5.83V21h15.17l1.61 1.61l1.41-1.41zM6 17l3-4l2.25 3l.82-1.1l2.1 2.1z");
}
</style><path class="qh_rg7z4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-hide-image"} {...others} />);
}

export default Component;
