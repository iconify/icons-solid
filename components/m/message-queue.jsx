import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjr-_su-k.css';
import '../../css/l/l_cw2_bvk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xjr-_su-k"/><path class="l_cw2_bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:message-queue"} {...others} />);
}

export default Component;
