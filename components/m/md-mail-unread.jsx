import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz7g-qohu.css';
import '../../css/x/xafs55bpy.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="lz7g-qohu"/><path class="xafs55bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-mail-unread"} {...others} />);
}

export default Component;
