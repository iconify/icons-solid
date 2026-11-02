import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t246jdb6i {
  fill: currentColor;
  d: path("M13 16v5a1.002 1.002 0 0 1-1.707.707l-6-6A1 1 0 0 1 5 15V9a1 1 0 0 1 1-1h3.586L5.293 3.707A1 1 0 0 1 6 2h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3.586l4.293 4.293A1 1 0 0 1 18 16Z");
}
</style><path class="t246jdb6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:framer-fill"} {...others} />);
}

export default Component;
