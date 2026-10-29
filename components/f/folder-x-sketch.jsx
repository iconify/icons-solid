import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9avuib2m.css';
import '../../css/d/d8myy4w_r.css';
import '../../css/o/ox-wivbrj.css';
import '../../css/z/zzy48nbew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b9avuib2m"/><path class="d8myy4w_r wm-a"/><path class="ox-wivbrj wm-k"/><path class="wm-a zzy48nbew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-x-sketch"} {...others} />);
}

export default Component;
