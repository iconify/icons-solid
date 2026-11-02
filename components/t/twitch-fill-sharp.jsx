import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pxxamib7d {
  fill: currentColor;
  d: path("M20 2a1 1 0 0 1 1 1v10c0 .265-.105.52-.293.707l-4 4A1 1 0 0 1 16 18h-3.586l-3.707 3.707A1 1 0 0 1 7 21v-3H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm-7 9V7a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m4 0V7a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0");
}
</style><path class="pxxamib7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:twitch-fill-sharp"} {...others} />);
}

export default Component;
