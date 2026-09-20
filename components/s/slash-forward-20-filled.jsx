import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ofuzzgbnx {
  fill: currentColor;
  d: path("M13.016 2.049a.75.75 0 0 1 .435.967l-5.5 14.5a.75.75 0 1 1-1.402-.532l5.5-14.5a.75.75 0 0 1 .967-.435");
}
</style><path class="ofuzzgbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:slash-forward-20-filled"} {...others} />);
}

export default Component;
