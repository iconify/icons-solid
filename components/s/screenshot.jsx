import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqxl1zbni.css';
import '../../css/w/w7d_6f7vi.css';
import '../../css/u/ud_qpnbzi.css';
import '../../css/y/yqyv0cbbr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gqxl1zbni"/><path class="w7d_6f7vi"/><path class="ud_qpnbzi"/><path class="yqyv0cbbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:screenshot"} {...others} />);
}

export default Component;
