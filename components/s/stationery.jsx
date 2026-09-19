import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_sh1-wma.css';
import '../../css/y/y15c62b3m.css';
import '../../css/z/ztt3ox3cd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j_sh1-wma"/><path class="y15c62b3m"/><path class="ztt3ox3cd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stationery"} {...others} />);
}

export default Component;
