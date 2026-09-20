import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l7_lysbde.css';
import '../../css/l/laouckjiw.css';
import '../../css/h/hgkgp9enu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l7_lysbde"/><path clip-rule="evenodd" class="laouckjiw"/><path class="hgkgp9enu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hat-glasses-duotone"} {...others} />);
}

export default Component;
