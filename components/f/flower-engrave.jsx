import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aqikjdb1l.css';
import '../../css/j/jjtf8bcgi.css';
import '../../css/z/zyla41bsz.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="aqikjdb1l wm-k"/><path class="jjtf8bcgi wm-shadow"/><path class="wm-k zyla41bsz"/><path class="hbi8hhkfx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flower-engrave"} {...others} />);
}

export default Component;
