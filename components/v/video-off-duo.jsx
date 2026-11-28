import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hij-t_s7i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wrqy68b6c.css';
import '../../css/p/ptb9_xbpm.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hij-t_s7i secondary"/><g class="dt0cm9dhy primary"><path class="wrqy68b6c"/><path class="ptb9_xbpm"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:video-off-duo"} {...others} />);
}

export default Component;
