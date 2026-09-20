import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq_kpr7ph.css';
import '../../css/r/rryt3j5qq.css';
import '../../css/n/n-shmacqo.css';
import '../../css/j/jtgc0918l.css';
import '../../css/a/axvfpvbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mq_kpr7ph"/><path class="rryt3j5qq"/><path class="n-shmacqo"/><path class="jtgc0918l"/><path class="axvfpvbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:hospital-house"} {...others} />);
}

export default Component;
