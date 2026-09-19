import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l14kt8brg {
  fill: currentColor;
  d: path("M8 16h12V4H8zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xq9oxjbzl {
  fill: currentColor;
  d: path("M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2M8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm12 14H8V4h12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z");
}
</style><path class="l14kt8brg"/><path class="xq9oxjbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-library-add"} {...others} />);
}

export default Component;
