import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xxxw5db8q {
  fill: currentColor;
  d: path("M3 16h5v-2H3zm6.5 0h5v-2h-5zm6.5 0h5v-2h-5zM3 20h2v-2H3zm4 0h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zm4 0h2v-2h-2zM3 12h8v-2H3zm10 0h8v-2h-8zM3 4v4h18V4z");
}
</style><path class="xxxw5db8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:line-style"} {...others} />);
}

export default Component;
