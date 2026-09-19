import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xomm06-3t.css';
import '../../css/c/ch-hf4btb.css';
import '../../css/k/k-1wrccov.css';
import '../../css/l/lwldt_2zh.css';
import '../../css/g/glm679b9z.css';
import '../../css/n/n6omk5bmd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="xomm06-3t"/><path class="ch-hf4btb"/><path class="k-1wrccov"/><circle class="lwldt_2zh"/><circle class="glm679b9z"/><circle class="n6omk5bmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:relational-graph"} {...others} />);
}

export default Component;
