import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i43b3bb4i {
  fill: currentColor;
  d: path("M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z");
}
</style><path class="i43b3bb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-table-rows"} {...others} />);
}

export default Component;
