import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crc-pem_k.css';
import '../../css/r/rqk2e-d8t.css';
import '../../css/u/uu630wbsr.css';
import '../../css/b/bx82kg8ql.css';
import '../../css/t/tqsvsubna.css';
import '../../css/x/x84_xhb6t.css';
import '../../css/a/a_7fh2bne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="crc-pem_k"/><path class="rqk2e-d8t"/><path class="uu630wbsr"/><path class="bx82kg8ql"/><path class="tqsvsubna"/><path class="x84_xhb6t"/><path class="a_7fh2bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:human-resources-businessman"} {...others} />);
}

export default Component;
