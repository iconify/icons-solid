import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lotl-7bnj.css';
import '../../css/d/d92sc2-4o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="lotl-7bnj"/><path class="d92sc2-4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:round-mask"} {...others} />);
}

export default Component;
