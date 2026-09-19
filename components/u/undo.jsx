import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n5dxrsa3b.css';
import '../../css/o/omor4un3n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="n5dxrsa3b"/><path class="omor4un3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:undo"} {...others} />);
}

export default Component;
