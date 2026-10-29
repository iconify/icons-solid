import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w2mn3losm.css';
import '../../css/s/skq03ibah.css';
import '../../css/l/l1i4c7ymy.css';
import '../../css/e/elu64db-k.css';
import '../../css/h/h38x_m0_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w2mn3losm"/><path class="skq03ibah wm-k"/><path class="l1i4c7ymy wm-a"/><path class="elu64db-k wm-k"/><path class="h38x_m0_y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:syringe-sketch"} {...others} />);
}

export default Component;
