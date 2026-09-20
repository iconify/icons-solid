import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xygct8bjn.css';
import '../../css/y/y-xxqpbcl.css';
import '../../css/x/xiby4z7mg.css';
import '../../css/g/g7m_9fb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xygct8bjn"/><path class="y-xxqpbcl"/><path class="xiby4z7mg"/><path class="g7m_9fb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
