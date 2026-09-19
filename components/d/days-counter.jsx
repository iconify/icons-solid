import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k5p-0llgh {
  d: path("M2.5 24C2.5 12.126 12.126 2.5 24 2.5S45.5 12.126 45.5 24S35.874 45.5 24 45.5S2.5 35.874 2.5 24");
}

.s0ki6hqoz {
  d: path("M23.734 11.56c6.871 0 12.441 5.57 12.441 12.44s-5.57 12.44-12.44 12.44a12.4 12.4 0 0 1-9.298-4.173l8.944-8.174z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="k5p-0llgh"/><path class="s0ki6hqoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:days-counter"} {...others} />);
}

export default Component;
