import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.edq8edbrs {
  fill: currentColor;
  d: path("M162.44 118.91a52 52 0 1 0-68.88 0a60 60 0 1 0 68.88 0M100 80a28 28 0 1 1 28 28a28 28 0 0 1-28-28m28 124a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="edq8edbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-eight-bold"} {...others} />);
}

export default Component;
