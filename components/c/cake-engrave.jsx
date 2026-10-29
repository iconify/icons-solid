import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f_9g0dbfc.css';
import '../../css/z/zd1talb1t.css';
import '../../css/y/yhtn9ti7t.css';
import '../../css/f/fiogixb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f_9g0dbfc"/><path class="wm-shadow zd1talb1t"/><path class="yhtn9ti7t"/><path class="fiogixb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cake-engrave"} {...others} />);
}

export default Component;
