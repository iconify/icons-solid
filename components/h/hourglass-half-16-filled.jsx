import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.evsrwz72j {
  fill: currentColor;
  d: path("M5.025 13h5.946c-.054-.52-.179-.868-.31-1.114c-.164-.31-.386-.55-.681-.806c-.11-.095-.209-.174-.323-.267l-.186-.151a6 6 0 0 1-.613-.56C8.401 9.614 8 8.937 8 8c0 .938-.402 1.614-.86 2.103a6 6 0 0 1-.613.56l-.186.15c-.114.093-.213.173-.323.268c-.296.256-.518.495-.683.805c-.13.247-.256.595-.31 1.114");
}
</style><path class="evsrwz72j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hourglass-half-16-filled"} {...others} />);
}

export default Component;
