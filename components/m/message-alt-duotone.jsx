import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxayxvndo.css';
import '../../css/x/xfzudwcmn.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="nxayxvndo"/><path class="xfzudwcmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:message-alt-duotone"} {...others} />);
}

export default Component;
