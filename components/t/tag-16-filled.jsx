import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.smcw34b3m {
  fill: currentColor;
  d: path("M2.587 7.314a1.99 1.99 0 0 0 0 2.822l3.296 3.28a2.013 2.013 0 0 0 2.836 0l4.67-4.647a2 2 0 0 0 .587-1.397L14 4.01A2 2 0 0 0 11.987 2l-3.25.014a2 2 0 0 0-1.41.584zM11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="smcw34b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tag-16-filled"} {...others} />);
}

export default Component;
