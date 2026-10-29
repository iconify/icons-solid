import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ypagybckf.css';
import '../../css/z/zlsehabcp.css';
import '../../css/u/ujn-f1vfa.css';
import '../../css/y/yf9dsibnw.css';
import '../../css/f/ftve-cbmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ypagybckf"/><path class="wm-a zlsehabcp"/><path class="ujn-f1vfa"/><path class="wm-a yf9dsibnw"/><path class="ftve-cbmp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-bucket-duo"} {...others} />);
}

export default Component;
