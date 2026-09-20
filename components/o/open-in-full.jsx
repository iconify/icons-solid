import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ic8hjjbxv {
  fill: currentColor;
  d: path("M3 21v-8h2v4.6L17.6 5H13V3h8v8h-2V6.4L6.4 19H11v2z");
}
</style><path class="ic8hjjbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:open-in-full"} {...others} />);
}

export default Component;
