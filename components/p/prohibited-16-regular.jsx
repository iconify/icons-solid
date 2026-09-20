import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.toh0lpxph {
  fill: currentColor;
  d: path("M11.875 3.418a6 6 0 0 0-8.457 8.457zm.707.707l-8.457 8.457a6 6 0 0 0 8.457-8.457M3.05 3.05a7 7 0 1 1 9.9 9.9a7 7 0 0 1-9.9-9.9");
}
</style><path class="toh0lpxph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:prohibited-16-regular"} {...others} />);
}

export default Component;
