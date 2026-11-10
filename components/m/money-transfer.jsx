import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6-40m8xj.css';
import '../../css/h/hvxgnmdxq.css';
import '../../css/q/qsa_qebbh.css';
import '../../css/b/bkq4_lb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v6-40m8xj"/><path class="hvxgnmdxq"/><path class="qsa_qebbh"/><path class="bkq4_lb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:money-transfer"} {...others} />);
}

export default Component;
