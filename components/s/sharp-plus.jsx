import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.miz5pzb0u {
  fill: currentColor;
  d: path("M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z");
}
</style><path class="miz5pzb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-plus"} {...others} />);
}

export default Component;
