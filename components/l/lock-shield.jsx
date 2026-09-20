import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl0b0sb2p.css';
import '../../css/n/nx9dd9beg.css';
import '../../css/x/x8jr5bsep.css';
import '../../css/c/ce-h8id5v.css';
import '../../css/y/y7gmwccaq.css';
import '../../css/k/kx42b26lo.css';
import '../../css/g/gxx8ewbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bl0b0sb2p"/><path class="nx9dd9beg"/><path class="x8jr5bsep"/><path class="ce-h8id5v"/><path class="y7gmwccaq"/><path class="kx42b26lo"/><path class="gxx8ewbfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:lock-shield"} {...others} />);
}

export default Component;
