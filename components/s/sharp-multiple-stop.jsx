import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nbnyb-bik {
  fill: currentColor;
  d: path("m17 4l4 4l-4 4V9h-4V7h4zM7 17h4v-2H7v-3l-4 4l4 4zm12-2h-2v2h2zm-4 0h-2v2h2zm-4-8H9v2h2zM7 7H5v2h2z");
}
</style><path class="nbnyb-bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-multiple-stop"} {...others} />);
}

export default Component;
