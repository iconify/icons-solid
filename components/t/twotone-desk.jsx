import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kz9n24bpt {
  fill: currentColor;
  d: path("M16 8h4v2h-4zm0 4h4v2h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.mxrwm4bmj {
  fill: currentColor;
  d: path("M2 6v12h2V8h10v10h2v-2h4v2h2V6zm18 8h-4v-2h4zm0-4h-4V8h4z");
}
</style><path class="kz9n24bpt"/><path class="mxrwm4bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-desk"} {...others} />);
}

export default Component;
