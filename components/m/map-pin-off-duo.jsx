import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0r16e4cs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wp1q2ntpc.css';
import '../../css/y/yylyrccfn.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0r16e4cs secondary"/><g class="dt0cm9dhy primary"><path class="wp1q2ntpc"/><path class="yylyrccfn"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:map-pin-off-duo"} {...others} />);
}

export default Component;
