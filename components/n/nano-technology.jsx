import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jp7vhrbba.css';
import '../../css/k/kh86v1ben.css';
import '../../css/y/y46-8vbct.css';
import '../../css/y/yuzx24utb.css';
import '../../css/x/xs5ai0h3j.css';
import '../../css/s/svhavlifc.css';
import '../../css/s/sy48tbbyd.css';
import '../../css/b/bmsi7sb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="jp7vhrbba"/><circle class="kh86v1ben"/><circle class="y46-8vbct"/><circle class="yuzx24utb"/><circle class="xs5ai0h3j"/><circle class="svhavlifc"/><circle class="sy48tbbyd"/><path class="bmsi7sb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:nano-technology"} {...others} />);
}

export default Component;
