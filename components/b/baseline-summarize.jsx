import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m12uk2bcr {
  fill: currentColor;
  d: path("M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9zM8 17c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 1V4.5l5.5 5.5z");
}
</style><path class="m12uk2bcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-summarize"} {...others} />);
}

export default Component;
