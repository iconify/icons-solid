import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eilaor5sk.css';
import '../../css/g/gcin3db2u.css';
import '../../css/l/l3413q35g.css';
import '../../css/g/gb7a2eocn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="eilaor5sk wm-k"/><path class="gcin3db2u wm-a"/><path class="l3413q35g"/><path class="gb7a2eocn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mandarin-orange"} {...others} />);
}

export default Component;
