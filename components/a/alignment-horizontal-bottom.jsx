import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/o/ogva77b5b.css';
import '../../css/q/qaykzuatb.css';
import '../../css/n/nsc949boq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="ogva77b5b"/><path class="qaykzuatb"/><path class="nsc949boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-horizontal-bottom"} {...others} />);
}

export default Component;
