import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.woje_d01k {
  fill: currentColor;
  d: path("M20 9H4v2h16zM4 15h16v-2H4z");
}
</style><path class="woje_d01k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:drag-handle"} {...others} />);
}

export default Component;
