import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/atdeesb2k.css';
import '../../css/l/lpbxz5bsk.css';
import '../../css/s/sizmydbvw.css';
import '../../css/p/p_g5enbde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="atdeesb2k wm-shadow"/><path class="lpbxz5bsk wm-shadow"/><path class="sizmydbvw"/><path class="p_g5enbde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:files"} {...others} />);
}

export default Component;
