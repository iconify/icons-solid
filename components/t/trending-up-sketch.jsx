import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ojpnoebxg.css';
import '../../css/z/z686sq8ka.css';
import '../../css/s/s9xijib5f.css';
import '../../css/f/fx3xvojda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ojpnoebxg wm-k"/><path class="wm-a z686sq8ka"/><path class="s9xijib5f wm-k"/><path class="fx3xvojda wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trending-up-sketch"} {...others} />);
}

export default Component;
