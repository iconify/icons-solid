import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wht_zowdm.css';
import '../../css/f/fmvl9jb-y.css';
import '../../css/i/iw07ocizs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wht_zowdm"/><path class="fmvl9jb-y wm-a"/><path class="iw07ocizs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:refrigerator-duo"} {...others} />);
}

export default Component;
