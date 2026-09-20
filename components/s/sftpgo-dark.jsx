import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6a60qx1v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p6a60qx1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sftpgo-dark"} {...others} />);
}

export default Component;
