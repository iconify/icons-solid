import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rfy4dcpub.css';
import '../../css/l/lq9vyphje.css';
import '../../css/x/xg81qhpaq.css';
import '../../css/d/duyyrjbez.css';
import '../../css/f/f4uooybgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rfy4dcpub wm-k"/><path class="lq9vyphje wm-a"/><path class="wm-shadow xg81qhpaq"/><path class="duyyrjbez wm-k"/><path class="f4uooybgd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:euro-engrave"} {...others} />);
}

export default Component;
