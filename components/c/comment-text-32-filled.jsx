import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.rbu4kkjjf {
  fill: currentColor;
  d: path("M2 7.5A4.5 4.5 0 0 1 6.5 3h19A4.5 4.5 0 0 1 30 7.5v12a4.5 4.5 0 0 1-4.5 4.5h-7.631l-6.571 5.603C9.999 30.71 8 29.787 8 28.08V24H6.5A4.5 4.5 0 0 1 2 19.5zM15 15h9a1 1 0 1 0 0-2h-9a1 1 0 1 0 0 2m-4-2H8a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m-3 4a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm13 2h3a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2");
}
</style><path class="rbu4kkjjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:comment-text-32-filled"} {...others} />);
}

export default Component;
