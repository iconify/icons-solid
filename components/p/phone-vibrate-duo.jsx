import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8l923lnx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wlrfrla8c.css';
import '../../css/m/m03d7tfff.css';
import '../../css/h/htwhtdbse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g8l923lnx secondary"/><g class="dt0cm9dhy primary"><path class="wlrfrla8c"/><path class="m03d7tfff"/><path class="htwhtdbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:phone-vibrate-duo"} {...others} />);
}

export default Component;
