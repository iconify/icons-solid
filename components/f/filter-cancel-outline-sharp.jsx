import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jb65wu89i {
  fill: currentColor;
  d: path("m15.9 18.512l-.708-.714l2.1-2.106l-2.1-2.086l.708-.714l2.106 2.112l2.086-2.112l.708.714l-2.08 2.086l2.08 2.106l-.708.714l-2.086-2.093zM8.5 19v-6.346L2.45 5h14.1l-6.05 7.654V19zm1-6.7L14.45 6h-9.9zm0 0");
}
</style><path class="jb65wu89i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:filter-cancel-outline-sharp"} {...others} />);
}

export default Component;
