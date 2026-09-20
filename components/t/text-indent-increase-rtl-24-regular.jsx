import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ae6_c5d_y {
  fill: currentColor;
  d: path("M6.25 16a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm15.03-6.78a.75.75 0 0 0-.976-.073l-.084.073l-2 2a.75.75 0 0 0-.073.976l.073.084l2 2a.75.75 0 0 0 1.133-.976l-.073-.084l-1.47-1.47l1.47-1.47a.75.75 0 0 0 0-1.06M3.25 11a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5zm3-5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z");
}
</style><path class="ae6_c5d_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-indent-increase-rtl-24-regular"} {...others} />);
}

export default Component;
