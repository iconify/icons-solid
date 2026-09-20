import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/a/apdq1ub8p.css';
import '../../css/r/ros5bvrws.css';
import '../../css/z/ztbmtjbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x-1lf64uh"/><path class="apdq1ub8p"/><path class="ros5bvrws"/><path class="ztbmtjbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-broken"} {...others} />);
}

export default Component;
