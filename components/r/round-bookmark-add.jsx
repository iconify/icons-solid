import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6vsprb0o {
  fill: currentColor;
  d: path("M21 6c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V7h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V4c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1m-2 13.48c0 .72-.73 1.2-1.39.92L12 18l-5.61 2.4A.994.994 0 0 1 5 19.48V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9z");
}
</style><path class="e6vsprb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-bookmark-add"} {...others} />);
}

export default Component;
