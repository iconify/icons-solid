import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gv48cybdb.css';
import '../../css/z/zx_m11buq.css';
import '../../css/s/ss02hqq4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gv48cybdb"/><path class="zx_m11buq"/><path class="ss02hqq4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:domino"} {...others} />);
}

export default Component;
