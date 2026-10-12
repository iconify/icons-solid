import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aajxl_bmj.css';
import '../../css/q/qiuqql6um.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/s/sxgghybyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aajxl_bmj"/><path class="qiuqql6um"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="sxgghybyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:money-x"} {...others} />);
}

export default Component;
