import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oalacdfvx {
  fill: currentColor;
  d: path("M7.33 20H2V4h5.33zM22 20V4h-5.33v16zm-7.33 0V4H9.33v16z");
}
</style><path class="oalacdfvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-week"} {...others} />);
}

export default Component;
