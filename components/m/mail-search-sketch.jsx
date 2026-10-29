import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c71l6bcgi.css';
import '../../css/m/mxdld3jdy.css';
import '../../css/e/eo-h1px8l.css';
import '../../css/g/gy1imgb_f.css';
import '../../css/t/t2ywyim8p.css';
import '../../css/c/c7t-imbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c71l6bcgi"/><path class="mxdld3jdy wm-k"/><path class="eo-h1px8l wm-a"/><path class="gy1imgb_f wm-k"/><path class="t2ywyim8p wm-a"/><path class="c7t-imbux wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-search-sketch"} {...others} />);
}

export default Component;
