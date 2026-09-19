import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ap6mnrb0q {
  fill: currentColor;
  d: path("M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M11 19H3V6h8zm10 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z");
}

.vy3upmp5d {
  fill: currentColor;
  d: path("M3 6h8v13H3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="vy3upmp5d"/><path class="ap6mnrb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-chrome-reader-mode"} {...others} />);
}

export default Component;
