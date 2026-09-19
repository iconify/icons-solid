import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lrey22syf {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-4 10H7v-2h10z");
}
</style><path class="lrey22syf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-indeterminate-check-box"} {...others} />);
}

export default Component;
