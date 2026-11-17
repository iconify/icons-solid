import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vm0tpbzpf {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm11 1a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Zm-2 12a1 1 0 0 0 0-2H8v-3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z");
}
</style><path class="vm0tpbzpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-expand-fill"} {...others} />);
}

export default Component;
