import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6pbpxkps.css';
import '../../css/x/xgze12x0m.css';
import '../../css/q/qcnfa6bkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e6pbpxkps"/><circle class="xgze12x0m"/><path class="qcnfa6bkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brightness"} {...others} />);
}

export default Component;
