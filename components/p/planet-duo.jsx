import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpdgzbbxg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fth_5tbmd.css';
import '../../css/x/xqquot5tz.css';
import '../../css/f/f845xlleg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpdgzbbxg secondary"/><g class="dt0cm9dhy primary"><path class="fth_5tbmd"/><path class="xqquot5tz"/><path class="f845xlleg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:planet-duo"} {...others} />);
}

export default Component;
