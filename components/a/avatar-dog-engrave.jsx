import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w5vc88boi.css';
import '../../css/m/meluy5hfc.css';
import '../../css/v/vsusckuge.css';
import '../../css/t/t-02dgcuh.css';
import '../../css/j/j5bkt9bua.css';
import '../../css/n/n9cx9hbme.css';
import '../../css/i/ijxkoo20y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w5vc88boi wm-k"/><path class="meluy5hfc wm-shadow"/><path class="vsusckuge wm-k"/><path class="t-02dgcuh wm-k"/><path class="j5bkt9bua wm-a"/><path class="n9cx9hbme wm-k"/><path class="ijxkoo20y wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-dog-engrave"} {...others} />);
}

export default Component;
