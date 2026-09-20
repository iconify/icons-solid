import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cua72wbew.css';
import '../../css/x/xltwp_47m.css';
import '../../css/k/klo26abzy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cua72wbew"/><path class="xltwp_47m"/><path class="klo26abzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qdrant-dark"} {...others} />);
}

export default Component;
