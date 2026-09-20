import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.dsym1n93y {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708L7.543 8.25l-3.998 3.998a2.44 2.44 0 0 0-.655 1.194l-.878 3.95a.5.5 0 0 0 .597.597l3.926-.873a2.5 2.5 0 0 0 1.234-.678l3.981-3.98l5.396 5.396a.5.5 0 0 0 .708-.708zm12.897 6.31l-2.587 2.587l-4.207-4.207l2.587-2.587zm-2.83-5.583a2.975 2.975 0 0 1 4.206 4.207l-.669.669l-4.207-4.207z");
}
</style><path class="dsym1n93y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:edit-off-20-filled"} {...others} />);
}

export default Component;
