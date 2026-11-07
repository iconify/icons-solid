import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6gwrmjs.css';
import '../../css/f/ffwd6obzr.css';
import '../../css/o/o0qlb2nqx.css';
import '../../css/q/q2ycdab-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="ffwd6obzr"/><path class="o0qlb2nqx"/><path class="q2ycdab-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-terminal-bold-duotone"} {...others} />);
}

export default Component;
