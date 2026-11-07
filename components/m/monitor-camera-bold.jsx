import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yivcorr_n.css';
import '../../css/v/vz52zxbce.css';
import '../../css/q/qruphy0vx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yivcorr_n"/><path class="vz52zxbce"/><path class="qruphy0vx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-camera-bold"} {...others} />);
}

export default Component;
