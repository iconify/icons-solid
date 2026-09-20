import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/daf256bfu.css';
import '../../css/n/n1n9sqbva.css';
import '../../css/x/xm4ox53de.css';
import '../../css/q/qjej3_d_o.css';
import '../../css/i/iid3i1bvb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="daf256bfu"/><path class="n1n9sqbva"/><path class="xm4ox53de"/><path class="qjej3_d_o"/><path class="iid3i1bvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:floppy-disk"} {...others} />);
}

export default Component;
