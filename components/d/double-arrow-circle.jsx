import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vmz4ktb6n.css';
import '../../css/i/iy_cxdwwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vmz4ktb6n"/><path class="iy_cxdwwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:double-arrow-circle"} {...others} />);
}

export default Component;
