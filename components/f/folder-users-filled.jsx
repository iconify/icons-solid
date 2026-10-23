import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzzmcmn5v.css';
import '../../css/x/xv4mh2pto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qzzmcmn5v"/><path class="xv4mh2pto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-users-filled"} {...others} />);
}

export default Component;
