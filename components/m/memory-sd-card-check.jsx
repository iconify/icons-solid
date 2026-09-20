import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fnj-t_blw.css';
import '../../css/p/pe5-nx9op.css';
import '../../css/z/zk27gtbyf.css';
import '../../css/q/qvs2fhg4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fnj-t_blw"/><path class="pe5-nx9op"/><path class="zk27gtbyf"/><path class="qvs2fhg4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:memory-sd-card-check"} {...others} />);
}

export default Component;
