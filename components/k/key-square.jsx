import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rz3p3kv0u.css';
import '../../css/o/omeeehbxv.css';
import '../../css/u/u760mxb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rz3p3kv0u"/><path clip-rule="evenodd" class="omeeehbxv"/><path class="u760mxb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:key-square"} {...others} />);
}

export default Component;
