import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-3swvbxo.css';
import '../../css/q/qtmq76bec.css';
import '../../css/j/jicd7e5_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="a-3swvbxo"/><circle class="qtmq76bec"/><path class="jicd7e5_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:alarm-silent"} {...others} />);
}

export default Component;
