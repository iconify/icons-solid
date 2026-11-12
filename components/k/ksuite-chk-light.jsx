import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vavo9cr_j.css';
import '../../css/i/ig82nms2n.css';
import '../../css/x/xj6r9dbct.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vavo9cr_j"/><path class="ig82nms2n"/><path class="xj6r9dbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-chk-light"} {...others} />);
}

export default Component;
