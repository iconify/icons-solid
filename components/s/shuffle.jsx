import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dokoaksqo.css';
import '../../css/c/ctq4xqiww.css';
import '../../css/v/vnn8mmbds.css';
import '../../css/a/a_0-o2q0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dokoaksqo wm-k"/><path class="ctq4xqiww wm-k"/><path class="vnn8mmbds wm-a"/><path class="a_0-o2q0s wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shuffle"} {...others} />);
}

export default Component;
