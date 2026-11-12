import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxxptl7ss.css';
import '../../css/x/xzdvdubue.css';
import '../../css/c/cmmtxw9or.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xxxptl7ss"/><path class="xzdvdubue"/><path class="cmmtxw9or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediamanager-dark"} {...others} />);
}

export default Component;
