import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/i/iwla4bc9p.css';
import '../../css/t/t628li7vo.css';
import '../../css/z/zbj2m4bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="iwla4bc9p"/><path class="t628li7vo"/><path class="zbj2m4bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:video-meeting-hexagon"} {...others} />);
}

export default Component;
