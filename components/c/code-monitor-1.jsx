import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6axgjb8x.css';
import '../../css/l/liv05r6py.css';
import '../../css/i/ixfxt7b7m.css';
import '../../css/t/tbrv3_bcp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i6axgjb8x"/><path class="liv05r6py"/><path class="ixfxt7b7m"/><path class="tbrv3_bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:code-monitor-1"} {...others} />);
}

export default Component;
