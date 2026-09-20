import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/n/nog5ftwkf.css';
import '../../css/r/r4bf7ebri.css';
import '../../css/w/w0f-hlp2t.css';
import '../../css/n/n4kfu5bmh.css';
import '../../css/t/tnljxhbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="nog5ftwkf"/><path class="r4bf7ebri"/><circle class="w0f-hlp2t"/><path class="n4kfu5bmh"/><path class="tnljxhbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-slider-linear"} {...others} />);
}

export default Component;
