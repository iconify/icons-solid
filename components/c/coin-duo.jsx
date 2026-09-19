import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aq5kvfbtr.css';
import '../../css/w/wcspu5b7n.css';
import '../../css/u/uz70hsbcy.css';
import '../../css/o/ofxeqkbsk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="aq5kvfbtr"/><path class="wcspu5b7n"/><path class="uz70hsbcy"/><path class="ofxeqkbsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:coin-duo"} {...others} />);
}

export default Component;
