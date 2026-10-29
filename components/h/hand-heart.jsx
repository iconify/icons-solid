import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqjhdlb_v.css';
import '../../css/y/ye75vbcqm.css';
import '../../css/j/jctnliumq.css';
import '../../css/l/liw58u7sh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a yqjhdlb_v"/><path class="wm-k ye75vbcqm"/><path class="jctnliumq wm-k"/><path class="liw58u7sh wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hand-heart"} {...others} />);
}

export default Component;
