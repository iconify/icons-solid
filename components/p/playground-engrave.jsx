import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dqi4ifb3t.css';
import '../../css/n/n-n2__xqz.css';
import '../../css/s/skgel1llp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dqi4ifb3t"/><path class="n-n2__xqz wm-shadow"/><path class="skgel1llp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:playground-engrave"} {...others} />);
}

export default Component;
