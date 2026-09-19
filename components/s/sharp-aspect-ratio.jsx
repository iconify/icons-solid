import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1vuwrr9x {
  fill: currentColor;
  d: path("M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm16-6H1v18h22zm-2 16.01H3V4.99h18z");
}
</style><path class="j1vuwrr9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-aspect-ratio"} {...others} />);
}

export default Component;
