import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gvyy3k0wq {
  fill: currentColor;
  d: path("M184 80a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8M40 88h96v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16m176 80h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M96 144H80a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h32v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8");
}
</style><path class="gvyy3k0wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:faders-horizontal-fill"} {...others} />);
}

export default Component;
