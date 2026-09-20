import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9cgi5g_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v9cgi5g_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folder-account"} {...others} />);
}

export default Component;
