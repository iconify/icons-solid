import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/j/j75_imlry.css';
import '../../css/n/nzmr-vj2k.css';
import '../../css/z/zpuucsaqc.css';
import '../../css/q/q4h48obnf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="j75_imlry"/><path class="nzmr-vj2k"/><path class="zpuucsaqc"/><path class="q4h48obnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sent-to-back"} {...others} />);
}

export default Component;
