import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oss8fvbse.css';
import '../../css/r/ry3d24byu.css';
import '../../css/m/msf1qbjnq.css';
import '../../css/f/fzlwwzbri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oss8fvbse"/><path class="ry3d24byu"/><path class="msf1qbjnq"/><path class="fzlwwzbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-teen"} {...others} />);
}

export default Component;
