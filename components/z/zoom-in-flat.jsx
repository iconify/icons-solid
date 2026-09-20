import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj_ag5b-o.css';
import '../../css/e/e4_uwyb3m.css';
import '../../css/w/wr0qpfbjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hj_ag5b-o"/><path clip-rule="evenodd" class="e4_uwyb3m"/><path class="wr0qpfbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:zoom-in-flat"} {...others} />);
}

export default Component;
