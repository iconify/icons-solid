import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fgdsbjaos.css';
import '../../css/v/vj3c051re.css';
import '../../css/l/lb5ghwnjs.css';
import '../../css/s/s3hfz9bmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fgdsbjaos wm-k"/><path class="vj3c051re wm-a"/><path class="lb5ghwnjs wm-k"/><path class="s3hfz9bmt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-braids-sketch"} {...others} />);
}

export default Component;
