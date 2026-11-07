import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uu9b4bc7u.css';
import '../../css/f/ft2l95bxf.css';
import '../../css/q/qunt0ab_c.css';
import '../../css/m/mqil5fb_y.css';
import '../../css/y/ybibiwhxk.css';
import '../../css/x/x6cvjgb6c.css';
import '../../css/z/z4w6awcch.css';
import '../../css/k/kdp00xb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="uu9b4bc7u"/><path class="ft2l95bxf"/></g><path class="qunt0ab_c"/><path class="mqil5fb_y"/><path class="ybibiwhxk"/><path class="x6cvjgb6c"/><path class="z4w6awcch"/><path class="kdp00xb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-pen-bold-duotone"} {...others} />);
}

export default Component;
