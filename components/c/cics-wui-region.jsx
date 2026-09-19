import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i--l_kmzs.css';
import '../../css/j/jfuk8ubuj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i--l_kmzs"/><path class="jfuk8ubuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cics-wui-region"} {...others} />);
}

export default Component;
