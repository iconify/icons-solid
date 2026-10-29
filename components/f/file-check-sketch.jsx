import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/or375cb4p.css';
import '../../css/q/q314hnbpq.css';
import '../../css/r/r91zadc9l.css';
import '../../css/d/du4e4tbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="or375cb4p"/><path class="q314hnbpq wm-a"/><path class="r91zadc9l wm-k"/><path class="du4e4tbta wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-check-sketch"} {...others} />);
}

export default Component;
