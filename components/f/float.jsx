import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zbnjef2vr.css';
import '../../css/z/zkmmd3ejx.css';
import '../../css/x/xammaabch.css';
import '../../css/h/higxnrbfw.css';
import '../../css/w/w0o9omd2b.css';
import '../../css/k/kgotq5bsn.css';
import '../../css/o/opct1j53s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="zbnjef2vr"/><path class="zkmmd3ejx"/><path class="xammaabch"/><path class="higxnrbfw"/><path class="w0o9omd2b"/><path class="kgotq5bsn"/><path class="opct1j53s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:float"} {...others} />);
}

export default Component;
