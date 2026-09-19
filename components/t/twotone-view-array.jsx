import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zdbjo-bzb {
  fill: currentColor;
  d: path("M9 7h6v10H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zybicnbwc {
  fill: currentColor;
  d: path("M15 7v10H9V7zm6-2h-3v14h3zm-4 0H7v14h10zM6 5H3v14h3z");
}
</style><path class="zdbjo-bzb"/><path class="zybicnbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-array"} {...others} />);
}

export default Component;
