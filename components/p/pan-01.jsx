import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i8vhupvre.css';
import '../../css/h/hqq8ct4_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i8vhupvre"/><path class="hqq8ct4_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pan-01"} {...others} />);
}

export default Component;
