import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k0bsypceh.css';
import '../../css/j/jy-19hy_m.css';
import '../../css/c/cpi78nbym.css';
import '../../css/x/x-m_43jif.css';
import '../../css/u/urjdred5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k0bsypceh wm-k"/><path class="jy-19hy_m wm-a"/><path class="cpi78nbym wm-shadow"/><path class="wm-k x-m_43jif"/><path class="urjdred5d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pickaxe-engrave"} {...others} />);
}

export default Component;
