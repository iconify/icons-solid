import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeq3q_egv.css';
import '../../css/o/oomnq0bpf.css';
import '../../css/k/kxrp00z_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xeq3q_egv"/><path clip-rule="evenodd" class="oomnq0bpf"/><path class="kxrp00z_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:contacts-4-fill"} {...others} />);
}

export default Component;
