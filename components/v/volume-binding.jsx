import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6dafjbul.css';
import '../../css/w/wrevi32si.css';
import '../../css/b/btx35_8hm.css';
import '../../css/a/ah1zjobhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6dafjbul"/><circle class="wrevi32si"/><path class="btx35_8hm"/><path class="ah1zjobhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:volume-binding"} {...others} />);
}

export default Component;
