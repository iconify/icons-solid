import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lh23q0bub.css';
import '../../css/f/fihxnqbec.css';
import '../../css/q/qy154lb5h.css';
import '../../css/s/sil1qubyf.css';
import '../../css/k/ks2n1wboh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lh23q0bub"/><path class="fihxnqbec wm-k"/><path class="qy154lb5h wm-a"/><path class="sil1qubyf wm-k"/><path class="ks2n1wboh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:butterfly-sketch"} {...others} />);
}

export default Component;
