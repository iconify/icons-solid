import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx66-bjff {
  fill: currentColor;
  d: path("M13 18h-2v-2h2zm2-4H9v6h6zm4-4.7V4h-3v2.6L12 3L2 12h3l7-6.31L19 12h3z");
}

.xmryzcccz {
  fill: currentColor;
  d: path("M11 16h2v2h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="xmryzcccz"/><path class="qx66-bjff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-roofing"} {...others} />);
}

export default Component;
