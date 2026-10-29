import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kr89-5bas.css';
import '../../css/e/epj0hxbqe.css';
import '../../css/w/w88g0g3vx.css';
import '../../css/i/i_kfu3tmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kr89-5bas"/><path class="epj0hxbqe wm-a"/><path class="w88g0g3vx wm-k"/><path class="i_kfu3tmd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-bucket-sketch"} {...others} />);
}

export default Component;
