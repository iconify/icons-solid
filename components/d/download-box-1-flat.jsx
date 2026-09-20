import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mibyxt_3y.css';
import '../../css/q/qg93e3bzh.css';
import '../../css/c/cmo9q1b6d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mibyxt_3y"/><path clip-rule="evenodd" class="qg93e3bzh"/><path clip-rule="evenodd" class="cmo9q1b6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:download-box-1-flat"} {...others} />);
}

export default Component;
