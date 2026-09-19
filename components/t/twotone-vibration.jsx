import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwbbrw4nw {
  fill: currentColor;
  d: path("M8 5h8v14H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.peycxl70x {
  fill: currentColor;
  d: path("M19 7h2v10h-2zm3 2h2v6h-2zM0 9h2v6H0zm16.5-6h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5M16 19H8V5h8zM3 7h2v10H3z");
}
</style><path class="mwbbrw4nw"/><path class="peycxl70x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-vibration"} {...others} />);
}

export default Component;
