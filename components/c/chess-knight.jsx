import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v6jq_fd_g.css';
import '../../css/n/nvdzt2b8g.css';
import '../../css/h/h88_nmsmo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="v6jq_fd_g"/><path class="nvdzt2b8g"/><path class="h88_nmsmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:chess-knight"} {...others} />);
}

export default Component;
