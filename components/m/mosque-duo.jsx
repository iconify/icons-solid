import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqoc5ebvr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/opyt3kb3y.css';
import '../../css/p/pfijxkg_b.css';
import '../../css/g/g7cjtj1xf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqoc5ebvr secondary"/><g class="dt0cm9dhy primary"><path class="opyt3kb3y"/><path class="pfijxkg_b"/><path class="g7cjtj1xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mosque-duo"} {...others} />);
}

export default Component;
