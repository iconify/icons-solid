import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qvtmukv6r.css';
import '../../css/x/x8r4mzvxu.css';
import '../../css/i/i-3mhitjh.css';
import '../../css/a/aq7i6sbtq.css';
import '../../css/r/rj-_bbi3a.css';
import '../../css/o/oza157bir.css';
import '../../css/g/gxcqw3b7c.css';
import '../../css/z/zwzgklbdj.css';
import '../../css/g/glsy69b7l.css';
import '../../css/v/vebw2ebpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qvtmukv6r wm-shadow"/><path class="x8r4mzvxu"/><path class="i-3mhitjh"/><path class="aq7i6sbtq"/><path class="rj-_bbi3a"/><path class="oza157bir wm-shine"/><path class="gxcqw3b7c wm-s"/><path class="wm-s zwzgklbdj"/><path class="glsy69b7l wm-s"/><path class="vebw2ebpb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-monster"} {...others} />);
}

export default Component;
