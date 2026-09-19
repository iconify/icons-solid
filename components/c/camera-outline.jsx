import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2vpa7-wx.css';
import '../../css/q/q_r9obkld.css';
import '../../css/f/fnfrkrn2b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h2vpa7-wx"/><circle class="q_r9obkld"/><path class="fnfrkrn2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:camera-outline"} {...others} />);
}

export default Component;
