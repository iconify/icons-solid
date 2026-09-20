import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/w/wsae9_log.css';
import '../../css/o/oirwttbcl.css';
import '../../css/k/k8w-ag7ze.css';
import '../../css/v/viq81bb_q.css';
import '../../css/m/mj0ewrt_k.css';
import '../../css/n/ndntt6wyp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="wsae9_log"/><path class="oirwttbcl"/><circle class="k8w-ag7ze"/><path class="viq81bb_q"/><path class="mj0ewrt_k"/><path class="ndntt6wyp"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-sint-maarten"} {...others} />);
}

export default Component;
