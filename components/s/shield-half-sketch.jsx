import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ao44rhn1j.css';
import '../../css/b/bphei3uci.css';
import '../../css/h/hak54kboe.css';
import '../../css/a/akoy7wbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ao44rhn1j"/><path class="bphei3uci wm-k"/><path class="hak54kboe wm-k"/><path class="akoy7wbkr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-half-sketch"} {...others} />);
}

export default Component;
