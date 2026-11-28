import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6_kdcctn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/ji5e28bhq.css';
import '../../css/t/t5xtc8odw.css';
import '../../css/z/zdl_efm0l.css';
import '../../css/q/qnmufby7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6_kdcctn secondary"/><g class="dt0cm9dhy primary"><path class="ji5e28bhq"/><path class="t5xtc8odw"/><path class="zdl_efm0l"/><path class="qnmufby7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sink-duo"} {...others} />);
}

export default Component;
