import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yovi0iekz {
  fill: currentColor;
  d: path("M4.4 21L3 19.6l7.525-7.55L6 10.925l4.95-3.075L10.525 2L15 5.775l5.4-2.2L18.225 9L22 13.45l-5.85-.4l-3.1 4.95l-1.125-4.525zM5 8L3 6l2-2l2 2zm13 13l-2-2l2-2l2 2z");
}
</style><path class="yovi0iekz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wand-stars"} {...others} />);
}

export default Component;
