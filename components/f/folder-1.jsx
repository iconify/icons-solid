import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuo0_vbsn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uuo0_vbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:folder-1"} {...others} />);
}

export default Component;
