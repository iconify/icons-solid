import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ln9wfbmoi {
  fill: currentColor;
  d: path("M12 8.6L9.07 13h5.86z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.psdx19bvf {
  fill: currentColor;
  d: path("M5 17h14v2H5zm7-12L5.33 15h13.34zm0 3.6l2.93 4.4H9.07z");
}
</style><path class="ln9wfbmoi"/><path class="psdx19bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-eject"} {...others} />);
}

export default Component;
