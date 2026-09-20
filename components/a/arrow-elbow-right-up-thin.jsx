import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jhfok0sei {
  fill: currentColor;
  d: path("M218.83 98.83a4 4 0 0 1-5.66 0L172 57.66V192a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h140V57.66l-41.17 41.17a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66");
}
</style><path class="jhfok0sei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-right-up-thin"} {...others} />);
}

export default Component;
