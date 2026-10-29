import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jkalrsb_r.css';
import '../../css/x/x998uibqq.css';
import '../../css/n/np6xvcb3n.css';
import '../../css/c/cewdoibek.css';
import '../../css/n/n_jnoxbmg.css';
import '../../css/v/vsqgnc0jq.css';
import '../../css/g/gmc58-bid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jkalrsb_r"/><path class="wm-k x998uibqq"/><path class="np6xvcb3n wm-a"/><path class="cewdoibek wm-s"/><path class="n_jnoxbmg wm-k"/><path class="vsqgnc0jq wm-a"/><path class="gmc58-bid wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:church-sketch"} {...others} />);
}

export default Component;
