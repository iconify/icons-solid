import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hi2xc8bop {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-2 16.02H3V4.98h18zM10 12H8l4-4l4 4h-2v4h-4z");
}
</style><path class="hi2xc8bop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-present-to-all"} {...others} />);
}

export default Component;
