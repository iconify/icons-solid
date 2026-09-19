import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgr9gibqz.css';
import '../../css/t/t_dgsfbzs.css';
import '../../css/l/l9mjqacqk.css';
import '../../css/v/vroqjjbyf.css';
import '../../css/w/w2aku6b0k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pgr9gibqz"/><path class="t_dgsfbzs"/><circle class="l9mjqacqk"/><circle class="vroqjjbyf"/><path class="w2aku6b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:trackball"} {...others} />);
}

export default Component;
