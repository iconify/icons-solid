import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/isus05bjz.css';
import '../../css/u/u36hxfbzo.css';
import '../../css/q/q5-iwtbxl.css';
import '../../css/x/xl8f705qc.css';
import '../../css/y/ydo-m-bmz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="isus05bjz"/><path class="u36hxfbzo"/><path class="q5-iwtbxl"/><path class="xl8f705qc"/><path class="ydo-m-bmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:file-report"} {...others} />);
}

export default Component;
