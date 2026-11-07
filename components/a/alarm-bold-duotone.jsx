import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_-_yx_oi.css';
import '../../css/g/gfnljuhlb.css';
import '../../css/k/kube8drda.css';
import '../../css/j/jf1pbcbud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_-_yx_oi"/><path class="gfnljuhlb"/><path class="kube8drda"/><path class="jf1pbcbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alarm-bold-duotone"} {...others} />);
}

export default Component;
