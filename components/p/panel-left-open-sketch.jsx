import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/phpr5f78c.css';
import '../../css/v/v7hhicl8z.css';
import '../../css/s/slj8phnoe.css';
import '../../css/x/xqz5s6pgz.css';
import '../../css/l/lyuu3snpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="phpr5f78c"/><path class="v7hhicl8z wm-k"/><path class="slj8phnoe wm-a"/><path class="wm-k xqz5s6pgz"/><path class="lyuu3snpg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-left-open-sketch"} {...others} />);
}

export default Component;
