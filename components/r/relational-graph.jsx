import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xomm06-3t.css';
import '../../css/c/ch-hf4btb.css';
import '../../css/k/k-1wrccov.css';
import '../../css/t/t7ur9jl4t.css';
import '../../css/v/vmadbjhux.css';
import '../../css/j/jz1brkr3o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xomm06-3t"/><path class="ch-hf4btb"/><path class="k-1wrccov"/><circle class="t7ur9jl4t"/><circle class="vmadbjhux"/><circle class="jz1brkr3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:relational-graph"} {...others} />);
}

export default Component;
