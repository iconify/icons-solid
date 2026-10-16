import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hneqcpbyv.css';
import '../../css/a/as0dl-bfc.css';
import '../../css/b/b___75bwh.css';
import '../../css/y/yqjm7ccwt.css';
import '../../css/c/c_qai1tcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hneqcpbyv"/><path class="as0dl-bfc"/><path class="b___75bwh"/><path class="yqjm7ccwt"/><path class="c_qai1tcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hard-drive-reload"} {...others} />);
}

export default Component;
