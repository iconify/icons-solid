import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a_ur4642b.css';
import '../../css/f/flbiw3q_a.css';
import '../../css/a/apevrpu8p.css';
import '../../css/k/k410pqbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a_ur4642b"/><path class="flbiw3q_a"/><path class="apevrpu8p"/><path class="k410pqbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:task-list-clipboard-clock"} {...others} />);
}

export default Component;
