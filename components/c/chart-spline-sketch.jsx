import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f-yvlbbar.css';
import '../../css/y/ykoe54boh.css';
import '../../css/e/ef6ao3b0m.css';
import '../../css/i/is6r9tbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f-yvlbbar wm-k"/><path class="wm-a ykoe54boh"/><path class="ef6ao3b0m wm-k"/><path class="is6r9tbwq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-spline-sketch"} {...others} />);
}

export default Component;
