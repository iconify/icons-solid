import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k5c7wwyuh.css';
import '../../css/d/dbxivir6k.css';
import '../../css/x/xcez03_th.css';
import '../../css/j/jjivkrbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k5c7wwyuh"/><path class="dbxivir6k wm-a"/><path class="wm-a xcez03_th"/><path class="jjivkrbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cricket-duo"} {...others} />);
}

export default Component;
