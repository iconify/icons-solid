import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/peerv6bli.css';
import '../../css/p/p4yviy-av.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="peerv6bli"/><path class="p4yviy-av"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dice"} {...others} />);
}

export default Component;
