import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j9nhecbga.css';
import '../../css/x/xnrpwftli.css';
import '../../css/v/vrcorib2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j9nhecbga"/><path class="xnrpwftli"/><path class="vrcorib2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:quote-sketch"} {...others} />);
}

export default Component;
