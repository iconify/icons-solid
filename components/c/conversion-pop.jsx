import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qep26ubpg.css';
import '../../css/c/c1lq1hbrh.css';
import '../../css/s/srjrcg4hx.css';
import '../../css/x/xsf_4nboe.css';
import '../../css/b/bizf4ab9t.css';
import '../../css/w/wsbdwpqko.css';
import '../../css/f/farspkbar.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qep26ubpg"/><path class="c1lq1hbrh"/><path class="srjrcg4hx"/><path class="xsf_4nboe"/><path class="bizf4ab9t"/><path class="wsbdwpqko"/><path class="farspkbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:conversion-pop"} {...others} />);
}

export default Component;
