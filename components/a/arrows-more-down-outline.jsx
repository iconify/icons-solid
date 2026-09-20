import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yr1-__bll {
  fill: currentColor;
  d: path("M6 20V10h1v9h9v1zm4-4V6h1v9h9v1z");
}
</style><path class="yr1-__bll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrows-more-down-outline"} {...others} />);
}

export default Component;
