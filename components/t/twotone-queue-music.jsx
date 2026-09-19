import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uy7esdbbx {
  fill: currentColor;
  d: path("M3 10h12v2H3zm0 4h8v2H3zm0-8h12v2H3zm14 8.18c-.31-.11-.65-.18-1-.18c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3V8h3V6h-5z");
}

.vardtqbfm {
  cx: 16px;
  cy: 17px;
  r: 1px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><circle class="vardtqbfm"/><path class="uy7esdbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-queue-music"} {...others} />);
}

export default Component;
