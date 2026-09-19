import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/i/iy87egbjv.css';
import '../../css/f/fv7etkbcn.css';
import '../../css/k/krd-pdbsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="iy87egbjv"/><path class="fv7etkbcn"/><path class="krd-pdbsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:keyboard-outline"} {...others} />);
}

export default Component;
