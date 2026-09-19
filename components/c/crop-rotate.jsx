import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vail75b-l.css';
import '../../css/t/too86x9zd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vail75b-l"/><path class="too86x9zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:crop-rotate"} {...others} />);
}

export default Component;
