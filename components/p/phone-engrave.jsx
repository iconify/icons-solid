import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tlsu4zyio.css';
import '../../css/w/wygh01b0s.css';
import '../../css/s/spnf93r-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tlsu4zyio"/><path class="wm-shadow wygh01b0s"/><path class="spnf93r-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-engrave"} {...others} />);
}

export default Component;
