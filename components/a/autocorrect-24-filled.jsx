import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tt-d7sblh {
  fill: currentColor;
  d: path("M13.594 4.723a3 3 0 0 1 .948.947l2.872 4.58H21.5a1 1 0 0 1 0 2l-2.75-.002a5 5 0 1 1-4-1.999h.303l-.284-.452l-1.922-3.064a1 1 0 0 0-1.626-.095l-.068.095L3.597 18.78a1 1 0 0 1-1.75-.96l.056-.103L9.459 5.67a3 3 0 0 1 4.135-.947m1.156 7.527a3 3 0 1 0 0 6a3 3 0 0 0 0-6");
}
</style><path class="tt-d7sblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:autocorrect-24-filled"} {...others} />);
}

export default Component;
