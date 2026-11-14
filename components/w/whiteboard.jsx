import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/ft4aq1-ib.css';
import '../../css/c/c3zm8bejl.css';
import '../../css/x/xwy67zb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ft4aq1-ib"/><path class="c3zm8bejl"/><path class="xwy67zb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:whiteboard"} {...others} />);
}

export default Component;
