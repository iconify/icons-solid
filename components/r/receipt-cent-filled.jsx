import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqj1_qbxe.css';
import '../../css/q/qcjhzlq8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqj1_qbxe"/><path clip-rule="evenodd" class="qcjhzlq8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:receipt-cent-filled"} {...others} />);
}

export default Component;
