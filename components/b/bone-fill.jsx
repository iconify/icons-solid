import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oaneavb2v {
  fill: currentColor;
  d: path("M231.12 107.72a35.91 35.91 0 0 1-46.19 6.8a.14.14 0 0 0-.1 0l-70.35 70.36v.08a36 36 0 1 1-66.37 22.92a36 36 0 1 1 22.92-66.37a.14.14 0 0 0 .1 0l70.35-70.36v-.08a36 36 0 1 1 66.37-22.92a36 36 0 0 1 23.27 59.57");
}
</style><path class="oaneavb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:bone-fill"} {...others} />);
}

export default Component;
