import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w2t9kvrcl.css';
import '../../css/e/e5drqabmo.css';
import '../../css/e/eerhch8on.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w2t9kvrcl"/><path class="e5drqabmo wm-shadow"/><path class="eerhch8on"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:check-engrave"} {...others} />);
}

export default Component;
