import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tlsu4zyio.css';
import '../../css/a/akuc8w9ak.css';
import '../../css/a/a-sal1mlb.css';
import '../../css/s/spnf93r-f.css';
import '../../css/s/slzsfcc0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tlsu4zyio wm-k"/><path class="akuc8w9ak wm-s"/><path class="a-sal1mlb wm-shadow"/><path class="spnf93r-f wm-k"/><path class="slzsfcc0u wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-missed-engrave"} {...others} />);
}

export default Component;
