import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t91s7oy2f.css';
import '../../css/u/uti5_1b8s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t91s7oy2f"/><path class="uti5_1b8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:bolt-circle"} {...others} />);
}

export default Component;
