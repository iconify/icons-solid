import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ws7vmacpo {
  fill: currentColor;
  d: path("M21 5h-3v14h3zm-4 0H7v14h10zM6 5H3v14h3z");
}
</style><path class="ws7vmacpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-array"} {...others} />);
}

export default Component;
