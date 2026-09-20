import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdjb2jber.css';
import '../../css/q/qn_gx1bqs.css';
import '../../css/t/t7up8owgi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fdjb2jber"/><path clip-rule="evenodd" class="qn_gx1bqs"/><path class="t7up8owgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:compress-pdf-flat"} {...others} />);
}

export default Component;
