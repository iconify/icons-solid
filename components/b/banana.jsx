import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i07364b7x.css';
import '../../css/x/xao6embbl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="i07364b7x"/><path class="xao6embbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:banana"} {...others} />);
}

export default Component;
