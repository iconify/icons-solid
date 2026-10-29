import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf9opgz_x.css';
import '../../css/p/pcmgirs8u.css';
import '../../css/z/zeii62bjk.css';
import '../../css/j/jmcvrubdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pf9opgz_x wm-k"/><path class="pcmgirs8u wm-k"/><path class="wm-k zeii62bjk"/><path class="jmcvrubdx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tablet"} {...others} />);
}

export default Component;
