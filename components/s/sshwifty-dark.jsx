import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctjzpmbpg.css';
import '../../css/r/ry3qkjbjr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ctjzpmbpg"/><path class="ry3qkjbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sshwifty-dark"} {...others} />);
}

export default Component;
