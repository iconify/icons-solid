import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oub3xj08x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6h9m-9 4.5h7m-7 4.5h5M19.42 4.92l1.41 1.41l.42.42l-.42.42l-8.91 8.91l-.42.42l-.55.23l-1.9.79l-.55.23l.23-.55l.79-1.9l.23-.55l.4-.45l8.45-9.35l.4-.45zm-1.67 9.83l.36 2.64l2.64.36l-2.64.36l-.36 2.64l-.36-2.64l-2.64-.36l2.64-.36z");
}
</style><path class="oub3xj08x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ai-writer-sharp"} {...others} />);
}

export default Component;
