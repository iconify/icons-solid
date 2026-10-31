import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rabb63b3v.css';
import '../../css/a/ayz9hfm5m.css';
import '../../css/s/smb2inp3x.css';
import '../../css/o/offbrxb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rabb63b3v wm-k"/><path class="ayz9hfm5m wm-k"/><path class="smb2inp3x wm-k"/><path class="offbrxb-v wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:server"} {...others} />);
}

export default Component;
