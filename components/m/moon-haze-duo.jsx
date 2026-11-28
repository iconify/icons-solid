import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub8_nm_uw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fgbgd-38a.css';
import '../../css/v/vob1wqbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ub8_nm_uw"/><g class="dt0cm9dhy primary"><path class="fgbgd-38a"/><path class="vob1wqbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:moon-haze-duo"} {...others} />);
}

export default Component;
