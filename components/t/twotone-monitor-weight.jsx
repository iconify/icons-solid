import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bn6ebpb5p {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z");
}

.df5wm1btb {
  fill: currentColor;
  d: path("M13 8.5h1v1h-1zm-3 0h1v1h-1zm1.5 0h1v1h-1z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.vzz6ax6it {
  fill: currentColor;
  d: path("M5 19h14V5H5zm7-13c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xmhbitshq {
  fill: currentColor;
  d: path("M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m1-3.5h1v1h-1zm-1.5 0h1v1h-1zm-1.5 0h1v1h-1z");
}
</style><path class="df5wm1btb"/><path class="vzz6ax6it"/><path class="xmhbitshq"/><path class="bn6ebpb5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-monitor-weight"} {...others} />);
}

export default Component;
