import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n6w3g-bwf {
  fill: currentColor;
  d: path("M16 14.14V9.86L12.97 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.uokof-bnh {
  fill: currentColor;
  d: path("M6 6h2v12H6zm12 12V6l-8.5 6zm-2-3.86L12.97 12L16 9.86z");
}
</style><path class="n6w3g-bwf"/><path class="uokof-bnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-skip-previous"} {...others} />);
}

export default Component;
