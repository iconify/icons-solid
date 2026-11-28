import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzie_n95r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/h/hw30gi65f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzie_n95r secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="hw30gi65f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-quarter-duo"} {...others} />);
}

export default Component;
