import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xz3dkdb-y {
  fill: currentColor;
  d: path("m14.5 11l-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z");
}
</style><path class="xz3dkdb-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-charging-station"} {...others} />);
}

export default Component;
