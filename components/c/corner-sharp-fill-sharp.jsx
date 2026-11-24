import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx48rybny {
  fill: currentColor;
  d: path("M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H6v13a1 1 0 0 1-2 0Z");
}
</style><path class="qx48rybny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:corner-sharp-fill-sharp"} {...others} />);
}

export default Component;
