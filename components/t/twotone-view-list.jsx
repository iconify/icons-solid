import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxz5v7tah {
  fill: currentColor;
  d: path("M3 5v14h18V5zm4 2v2H5V7zm-2 6v-2h2v2zm0 2h2v2H5zm14 2H9v-2h10zm0-4H9v-2h10zm0-4H9V7h10z");
}

.h1n5-_b6i {
  fill: currentColor;
  d: path("M7 7v2H5V7zm-2 6v-2h2v2zm0 2h2v2H5zm14 2H9v-2h10zm0-4H9v-2h10zm0-4H9V7h10z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="h1n5-_b6i"/><path class="gxz5v7tah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-list"} {...others} />);
}

export default Component;
