import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ileii5q1q {
  fill: currentColor;
  d: path("M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm4.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.25 6.75a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0z");
}
</style><path class="ileii5q1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:book-information-20-filled"} {...others} />);
}

export default Component;
