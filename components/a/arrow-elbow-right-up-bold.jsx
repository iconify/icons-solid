import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.szxkvyboz {
  fill: currentColor;
  d: path("M224.49 104.49a12 12 0 0 1-17 0L180 77v115a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h132V77l-27.51 27.52a12 12 0 1 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 16.97");
}
</style><path class="szxkvyboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-right-up-bold"} {...others} />);
}

export default Component;
