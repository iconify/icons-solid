import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8w0l31rc.css';
import '../../css/z/zb3j6vxqp.css';
import '../../css/l/l_eotvg8k.css';
import '../../css/x/xpldmq40t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8w0l31rc"/><path class="zb3j6vxqp"/><path class="l_eotvg8k"/><path class="xpldmq40t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cph"} {...others} />);
}

export default Component;
