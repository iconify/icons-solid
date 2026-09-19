import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kof1pjl2v.css';
import '../../css/w/w6rc0es0l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kof1pjl2v"/><path class="w6rc0es0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:balance-scale"} {...others} />);
}

export default Component;
