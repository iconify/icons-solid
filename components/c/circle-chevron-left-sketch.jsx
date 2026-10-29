import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o7q1r2bvo.css';
import '../../css/t/ttgol1b5u.css';
import '../../css/c/cgfote1dz.css';
import '../../css/r/rhz0hmbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o7q1r2bvo"/><path class="ttgol1b5u wm-a"/><path class="cgfote1dz wm-k"/><path class="rhz0hmbrm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-chevron-left-sketch"} {...others} />);
}

export default Component;
