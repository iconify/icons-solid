import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1qw01bzr {
  fill: currentColor;
  d: path("M6 20V10h1v9h9v1zm4-3.98v-10h1v9h9v1z");
}
</style><path class="s1qw01bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrows-more-down"} {...others} />);
}

export default Component;
