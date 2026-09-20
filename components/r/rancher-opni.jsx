import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7q30fbjm.css';
import '../../css/k/k42dqu5-u.css';
import '../../css/r/reokt-boq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e7q30fbjm"/><path class="k42dqu5-u"/><path class="reokt-boq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-opni"} {...others} />);
}

export default Component;
