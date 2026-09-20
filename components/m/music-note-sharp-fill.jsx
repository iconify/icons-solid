import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ofxmwn6wx.css';
import '../../css/l/lzegzbbnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ofxmwn6wx"/><path class="lzegzbbnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:music-note-sharp-fill"} {...others} />);
}

export default Component;
