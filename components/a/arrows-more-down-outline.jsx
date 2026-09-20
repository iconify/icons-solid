import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewwdgpbmu {
  fill: currentColor;
  d: path("M5 21V10h2v9h9v2zm5-5V5h2v9h9v2z");
}
</style><path class="ewwdgpbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrows-more-down-outline"} {...others} />);
}

export default Component;
