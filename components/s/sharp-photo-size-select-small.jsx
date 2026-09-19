import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qu7o--b0r {
  fill: currentColor;
  d: path("M23 15h-2v2h2zm0 4h-2v2h2zm0-8h-2v2h2zm-8-8h-2v2h2zm8 4h-2v2h2zM1 21h10v-6H1zM3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm4 0h-2v2h2zm-4 16h-2v2h2zM3 11H1v2h2zm8-8H9v2h2zM7 3H5v2h2zM3 3H1v2h2z");
}
</style><path class="qu7o--b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-photo-size-select-small"} {...others} />);
}

export default Component;
