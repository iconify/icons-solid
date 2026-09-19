import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oyx227b1q.css';
import '../../css/j/jap9g-nus.css';
import '../../css/w/wzt-yrb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oyx227b1q"/><path class="jap9g-nus"/><path class="wzt-yrb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:structure-folder-circle"} {...others} />);
}

export default Component;
