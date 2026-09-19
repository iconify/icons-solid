import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rcsm-ac7i {
  fill: currentColor;
  d: path("M22 18V2H6v16zm-11-6l2.03 2.71L16 11l4 5H8zM2 6v16h16v-2H4V6z");
}
</style><path class="rcsm-ac7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-collections"} {...others} />);
}

export default Component;
