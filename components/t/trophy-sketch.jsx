import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ih6qqcvxi.css';
import '../../css/c/ckiijib5f.css';
import '../../css/c/ct7tzk2gs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ih6qqcvxi"/><path class="ckiijib5f"/><path class="ct7tzk2gs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trophy-sketch"} {...others} />);
}

export default Component;
