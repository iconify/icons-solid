import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yb5rymbwe.css';
import '../../css/n/ncssx-uto.css';
import '../../css/f/ffdsudbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yb5rymbwe"/><path class="ncssx-uto"/><path class="ffdsudbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-open-dot"} {...others} />);
}

export default Component;
