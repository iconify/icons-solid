import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/z/zmet8xb1k.css';
import '../../css/w/wng9gxbpa.css';
import '../../css/y/yg1v9s_3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="zmet8xb1k"/><path class="wng9gxbpa"/><path class="yg1v9s_3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dot-circle-x"} {...others} />);
}

export default Component;
