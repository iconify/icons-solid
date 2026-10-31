import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pgteucbpt.css';
import '../../css/j/j1sbpxxao.css';
import '../../css/l/lg-8n1num.css';
import '../../css/e/eefbnzrzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pgteucbpt"/><path class="j1sbpxxao wm-shine"/><path class="lg-8n1num wm-k"/><path class="eefbnzrzq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:square-function"} {...others} />);
}

export default Component;
