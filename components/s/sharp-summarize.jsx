import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.np4g0vbua {
  fill: currentColor;
  d: path("M15 3H3v18h18V9zM8 17c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 1V4.5l5.5 5.5z");
}
</style><path class="np4g0vbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-summarize"} {...others} />);
}

export default Component;
