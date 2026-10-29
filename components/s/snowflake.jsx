import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjf5pubej.css';
import '../../css/k/kzt1twblh.css';
import '../../css/x/xbxbwdb1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zjf5pubej"/><path class="kzt1twblh"/><path class="xbxbwdb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:snowflake"} {...others} />);
}

export default Component;
