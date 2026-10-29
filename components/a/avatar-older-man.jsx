import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ypzgepbsy.css';
import '../../css/h/h26yjmb-o.css';
import '../../css/s/sn07vob-o.css';
import '../../css/r/r8vscib9a.css';
import '../../css/f/f6q-rwbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ypzgepbsy"/><path class="h26yjmb-o"/><path class="sn07vob-o"/><path class="r8vscib9a"/><path class="f6q-rwbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-older-man"} {...others} />);
}

export default Component;
