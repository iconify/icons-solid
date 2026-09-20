import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.j9c59ccli {
  fill: currentColor;
  d: path("M3 4.5A1.5 1.5 0 0 1 4.5 3h11A1.5 1.5 0 0 1 17 4.5v7a1.5 1.5 0 0 1-1.5 1.5H10V8a2 2 0 0 0-2-2H3zM10 15h7.5a.5.5 0 0 0 0-1H10zM2 8.5A1.5 1.5 0 0 1 3.5 7h4A1.5 1.5 0 0 1 9 8.5v8A1.5 1.5 0 0 1 7.5 18h-4A1.5 1.5 0 0 1 2 16.5zM5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="j9c59ccli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:phone-laptop-20-filled"} {...others} />);
}

export default Component;
