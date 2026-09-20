import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/cja39gbwz.css';
import '../../css/r/rcp5fi06g.css';
import '../../css/q/qgfhl9b-b.css';
import '../../css/e/efeym49sn.css';
import '../../css/z/z8j9wfbug.css';
import '../../css/r/rp7b-vbny.css';
import '../../css/i/iskcssbxd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="cja39gbwz"/><path class="rcp5fi06g"/><path class="qgfhl9b-b"/><path class="efeym49sn"/><path class="z8j9wfbug"/><path class="rp7b-vbny"/><path class="iskcssbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:convert-pdf-1"} {...others} />);
}

export default Component;
