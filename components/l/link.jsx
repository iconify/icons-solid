import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuipojbnc.css';
import '../../css/m/mxlj29bzq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nuipojbnc"/><path class="mxlj29bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:link"} {...others} />);
}

export default Component;
