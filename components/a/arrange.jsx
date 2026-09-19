import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wal7ho3rf.css';
import '../../css/v/v6hl1hb8w.css';
import '../../css/o/otljbkb5n.css';
import '../../css/x/xtyxypbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wal7ho3rf"/><path class="v6hl1hb8w"/><path class="otljbkb5n"/><path class="xtyxypbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrange"} {...others} />);
}

export default Component;
