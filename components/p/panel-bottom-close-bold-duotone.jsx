import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq9rqn1zt.css';
import '../../css/w/wj_8rllsk.css';
import '../../css/n/na-mcbnwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nq9rqn1zt"/><path class="wj_8rllsk"/><path class="na-mcbnwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-bottom-close-bold-duotone"} {...others} />);
}

export default Component;
