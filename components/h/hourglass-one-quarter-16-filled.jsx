import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.x3a8tbb5s {
  fill: currentColor;
  d: path("m6.113 11l-.095.08c-.296.257-.518.496-.683.806c-.13.247-.256.595-.31 1.114h5.946c-.054-.52-.179-.868-.31-1.114c-.164-.31-.386-.55-.681-.806L9.885 11z");
}
</style><path class="x3a8tbb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hourglass-one-quarter-16-filled"} {...others} />);
}

export default Component;
