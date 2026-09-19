import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow7i0tzjj.css';
import '../../css/s/s47q5obuv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ow7i0tzjj"/><path class="s47q5obuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:basket"} {...others} />);
}

export default Component;
