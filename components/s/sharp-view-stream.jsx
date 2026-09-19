import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d1jb6ibdc {
  fill: currentColor;
  d: path("M3 19v-6h18v6zM3 5v6h18V5z");
}
</style><path class="d1jb6ibdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-stream"} {...others} />);
}

export default Component;
