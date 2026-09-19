import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ng7d50t9d.css';
import '../../css/p/pzb--v43q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ng7d50t9d"/><path class="pzb--v43q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:whatsapp"} {...others} />);
}

export default Component;
