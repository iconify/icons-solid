import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kru3nxblp.css';
import '../../css/j/jmr-anpkd.css';
import '../../css/x/x4jk-achl.css';
import '../../css/z/zr-t1cbvh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kru3nxblp"/><path clip-rule="evenodd" class="jmr-anpkd"/><path class="x4jk-achl"/><path class="zr-t1cbvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:vpn-connection-flat"} {...others} />);
}

export default Component;
