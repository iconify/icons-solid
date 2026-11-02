import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u5g-q6bcn {
  fill: currentColor;
  d: path("M6 3h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m1 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-1 7h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m1 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="u5g-q6bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:server-fill-round"} {...others} />);
}

export default Component;
