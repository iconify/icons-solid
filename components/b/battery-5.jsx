import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0k5xydhj.css';
import '../../css/h/h0r0o6bjk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n0k5xydhj"/><path class="h0r0o6bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:battery-5"} {...others} />);
}

export default Component;
