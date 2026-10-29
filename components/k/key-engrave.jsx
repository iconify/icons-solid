import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kqeyp4k-t.css';
import '../../css/c/cbqvu9b5z.css';
import '../../css/x/xpmjmd9yr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kqeyp4k-t"/><path class="cbqvu9b5z wm-shadow"/><path class="xpmjmd9yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:key-engrave"} {...others} />);
}

export default Component;
