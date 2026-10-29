import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/znnoyhbyo.css';
import '../../css/o/o_5vpskcd.css';
import '../../css/b/b8z8gglph.css';
import '../../css/z/z378pmv2q.css';
import '../../css/j/jplfkacad.css';
import '../../css/s/st751rbpt.css';
import '../../css/b/bc-jqq00q.css';
import '../../css/y/ydh1gybgq.css';
import '../../css/l/ls_s-pm5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k znnoyhbyo"/><path class="o_5vpskcd wm-k"/><path class="b8z8gglph wm-k"/><path class="wm-k z378pmv2q"/><path class="jplfkacad wm-k"/><path class="st751rbpt wm-a"/><path class="bc-jqq00q wm-a"/><path class="wm-a ydh1gybgq"/><path class="ls_s-pm5r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-dog-sketch"} {...others} />);
}

export default Component;
