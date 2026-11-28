import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms6brvbow.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zr9i61kva.css';
import '../../css/r/rqp586bnn.css';
import '../../css/b/blvo7kblh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ms6brvbow secondary"/><g class="dt0cm9dhy primary"><path class="zr9i61kva"/><path class="rqp586bnn"/><path class="blvo7kblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:undo-dot-duo"} {...others} />);
}

export default Component;
