import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m42t7ebcs.css';
import '../../css/z/zriv5vxlj.css';
import '../../css/w/wh263_jsa.css';
import '../../css/m/mgtt24brm.css';
import '../../css/e/ef6cwgk0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m42t7ebcs"/><path class="zriv5vxlj"/><path class="wh263_jsa"/><path class="mgtt24brm"/><path class="ef6cwgk0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:beach"} {...others} />);
}

export default Component;
