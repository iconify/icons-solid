import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh4z5kbri.css';
import '../../css/v/vhk8n-b7m.css';
import '../../css/h/hlbcq7bvh.css';
import '../../css/p/pdlb79bnc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vh4z5kbri"/><circle class="vhk8n-b7m"/><path class="hlbcq7bvh"/><path class="pdlb79bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:taskade"} {...others} />);
}

export default Component;
