import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_9hczfll.css';
import '../../css/u/uf8mm-b2b.css';
import '../../css/v/v6-odob5a.css';
import '../../css/v/vgzrscbzm.css';
import '../../css/r/rcvavhk-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o_9hczfll"/><path class="uf8mm-b2b"/><path class="v6-odob5a"/><path class="vgzrscbzm"/><path class="rcvavhk-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wallet-plus"} {...others} />);
}

export default Component;
