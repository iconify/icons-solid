import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zr9i61kva.css';
import '../../css/r/rqp586bnn.css';
import '../../css/b/blvo7kblh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zr9i61kva"/><path class="rqp586bnn"/><path class="blvo7kblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:undo-dot"} {...others} />);
}

export default Component;
