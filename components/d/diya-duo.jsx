import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tmvypic5b.css';
import '../../css/o/olwisjbgg.css';
import '../../css/i/ieced1b-r.css';
import '../../css/b/bb7znibim.css';
import '../../css/b/b1z0d6brh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tmvypic5b"/><path class="olwisjbgg wm-a"/><path class="ieced1b-r wm-a"/><path class="bb7znibim"/><path class="b1z0d6brh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:diya-duo"} {...others} />);
}

export default Component;
