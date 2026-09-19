import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aq2r64hvn.css';
import '../../css/p/pk0tvervw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aq2r64hvn"/><path class="pk0tvervw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:speaker"} {...others} />);
}

export default Component;
