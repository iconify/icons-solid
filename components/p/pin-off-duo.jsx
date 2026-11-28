import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_j2c6bga.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a8376lbnk.css';
import '../../css/a/a9_8oport.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_j2c6bga secondary"/><g class="dt0cm9dhy primary"><path class="a8376lbnk"/><path class="a9_8oport"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pin-off-duo"} {...others} />);
}

export default Component;
