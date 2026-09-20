import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n7zv0yw4o {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m39.43-117l-32 80a8 8 0 0 1-14.86 0l-32-80a8 8 0 0 1 14.86-6L128 154.46L152.57 93a8 8 0 1 1 14.86 6");
}
</style><path class="n7zv0yw4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:letter-circle-v"} {...others} />);
}

export default Component;
