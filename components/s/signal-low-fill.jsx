import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1hufhbrq {
  fill: currentColor;
  d: path("M9 12a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0Zm-4 8v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m9-1h.01a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}
</style><path class="i1hufhbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:signal-low-fill"} {...others} />);
}

export default Component;
