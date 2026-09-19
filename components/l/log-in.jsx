import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrg0c1b_k.css';
import '../../css/d/d01u25bof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrg0c1b_k"/><path class="d01u25bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:log-in"} {...others} />);
}

export default Component;
