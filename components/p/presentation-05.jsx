import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i9h5kyu-u.css';
import '../../css/k/k77ak7bhv.css';
import '../../css/k/kyhrmps2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i9h5kyu-u"/><path class="k77ak7bhv"/><path class="kyhrmps2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:presentation-05"} {...others} />);
}

export default Component;
