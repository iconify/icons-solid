import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kag80rb4s.css';
import '../../css/h/hex-lic2x.css';
import '../../css/d/dmc_suboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kag80rb4s"/><path class="hex-lic2x"/><path class="dmc_suboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:slideshow"} {...others} />);
}

export default Component;
