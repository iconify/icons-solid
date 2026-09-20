import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3v7f-bdm.css';
import '../../css/j/j9310_jej.css';
import '../../css/l/lfcpif5sx.css';
import '../../css/c/ct_zwvx1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j3v7f-bdm"/><path class="j9310_jej"/><path class="lfcpif5sx"/><path class="ct_zwvx1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cellular-network-wifi-3g"} {...others} />);
}

export default Component;
