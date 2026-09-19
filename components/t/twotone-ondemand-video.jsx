import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gg0s53bku {
  fill: currentColor;
  d: path("M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 14H3V5h18z");
}

.nr66pjbca {
  fill: currentColor;
  d: path("M3 17h18V5H3zM9 7l7 4l-7 4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="nr66pjbca"/><path class="gg0s53bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-ondemand-video"} {...others} />);
}

export default Component;
