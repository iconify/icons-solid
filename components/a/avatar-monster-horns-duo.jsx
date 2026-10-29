import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b4idr3p_h.css';
import '../../css/l/le1rixbum.css';
import '../../css/y/yu42qnbzo.css';
import '../../css/k/klfzlu_vz.css';
import '../../css/y/ygjllm40u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b4idr3p_h"/><path class="le1rixbum wm-a"/><path class="wm-a yu42qnbzo"/><path class="klfzlu_vz"/><path class="wm-a ygjllm40u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-horns-duo"} {...others} />);
}

export default Component;
