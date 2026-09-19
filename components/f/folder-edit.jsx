import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lc-kr-ega.css';
import '../../css/l/lsv8_vxxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lc-kr-ega"/><path class="lsv8_vxxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-edit"} {...others} />);
}

export default Component;
