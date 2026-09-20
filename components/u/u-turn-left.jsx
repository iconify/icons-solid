import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mhx5q-eni {
  fill: currentColor;
  d: path("M16 21V9q0-1.65-1.175-2.825T12 5T9.175 6.175T8 9v4.2l1.6-1.6L11 13l-4 4l-4-4l1.4-1.4L6 13.2V9q0-2.5 1.75-4.25T12 3t4.25 1.75T18 9v12z");
}
</style><path class="mhx5q-eni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:u-turn-left"} {...others} />);
}

export default Component;
