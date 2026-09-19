import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p-x09lu6p.css';
import '../../css/c/cql6yxz1w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="p-x09lu6p"/><path class="cql6yxz1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:invert-left"} {...others} />);
}

export default Component;
