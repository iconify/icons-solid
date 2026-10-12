import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpyifib8k.css';
import '../../css/t/t3t6arbwz.css';
import '../../css/t/t1z169cnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpyifib8k"/><path class="t3t6arbwz"/><path class="t1z169cnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:phone-call-filled"} {...others} />);
}

export default Component;
