import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a39eozb4h.css';
import '../../css/o/oj34xxbcj.css';
import '../../css/k/k5-wqgb-q.css';
import '../../css/d/diyvfeblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a39eozb4h"/><path class="oj34xxbcj"/><path class="k5-wqgb-q"/><path class="diyvfeblp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:handshake"} {...others} />);
}

export default Component;
