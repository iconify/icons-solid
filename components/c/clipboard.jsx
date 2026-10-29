import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc715-kwz.css';
import '../../css/b/bctv-cbto.css';
import '../../css/h/hustz32ji.css';
import '../../css/a/a55wzqn_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k yc715-kwz"/><path class="bctv-cbto wm-k"/><path class="hustz32ji wm-a"/><path class="a55wzqn_l wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:clipboard"} {...others} />);
}

export default Component;
