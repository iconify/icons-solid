import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rlx4b1bpx {
  fill: currentColor;
  d: path("M6 21V9q0-2.5 1.75-4.25T12 3t4.25 1.75T18 9v4.2l1.6-1.6L21 13l-4 4l-4-4l1.4-1.4l1.6 1.6V9q0-1.65-1.175-2.825T12 5T9.175 6.175T8 9v12z");
}
</style><path class="rlx4b1bpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:u-turn-right-outline-sharp"} {...others} />);
}

export default Component;
