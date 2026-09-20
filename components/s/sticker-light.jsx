import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b6gzppaze {
  fill: currentColor;
  d: path("M168 34H88a54.06 54.06 0 0 0-54 54v80a54.06 54.06 0 0 0 54 54h48a5.9 5.9 0 0 0 1.9-.31c25.84-8.61 75.18-57.95 83.79-83.79a5.9 5.9 0 0 0 .31-1.9V88a54.06 54.06 0 0 0-54-54M46 168V88a42 42 0 0 1 42-42h80a42 42 0 0 1 42 42v42h-26a54.06 54.06 0 0 0-54 54v26H88a42 42 0 0 1-42-42m96 38.67V184a42 42 0 0 1 42-42h22.67c-11.83 21.1-43.57 52.84-64.67 64.67");
}
</style><path class="b6gzppaze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sticker-light"} {...others} />);
}

export default Component;
