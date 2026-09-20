import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ohawklu8u {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12z");
}
</style><path class="ohawklu8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:folder-sharp"} {...others} />);
}

export default Component;
