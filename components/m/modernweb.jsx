import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn5e1o2rf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wn5e1o2rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:modernweb"} {...others} />);
}

export default Component;
