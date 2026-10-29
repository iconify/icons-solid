import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u77n4s6-n.css';
import '../../css/r/rpqxzacuc.css';
import '../../css/e/eeje0kknz.css';
import '../../css/b/bt7scxyyw.css';
import '../../css/u/ui38c_2aq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u77n4s6-n wm-k"/><path class="rpqxzacuc wm-a"/><path class="eeje0kknz wm-shadow"/><path class="bt7scxyyw wm-k"/><path class="ui38c_2aq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:helicopter-engrave"} {...others} />);
}

export default Component;
