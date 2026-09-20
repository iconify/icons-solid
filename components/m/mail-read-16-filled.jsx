import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.tcmv4vb6r {
  fill: currentColor;
  d: path("M7.732 1.078a.5.5 0 0 1 .536 0l4.806 3.058a2 2 0 0 1 .843 1.118L8 8.432L2.086 5.244a2 2 0 0 1 .84-1.108zM2 6.334V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.344L8.237 9.44a.5.5 0 0 1-.474 0z");
}
</style><path class="tcmv4vb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:mail-read-16-filled"} {...others} />);
}

export default Component;
