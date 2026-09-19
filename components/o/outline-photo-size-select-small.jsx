import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qeu2sczrt {
  fill: currentColor;
  d: path("M23 15h-2v2h2zm0-4h-2v2h2zm0 8h-2v2c1 0 2-1 2-2M15 3h-2v2h2zm8 4h-2v2h2zm-2-4v2h2c0-1-1-2-2-2M3 21h8v-6H1v4c0 1.1.9 2 2 2M3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm0 16h-2v2h2zM3 3C2 3 1 4 1 5h2zm0 8H1v2h2zm8-8H9v2h2zM7 3H5v2h2z");
}
</style><path class="qeu2sczrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-photo-size-select-small"} {...others} />);
}

export default Component;
