import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n04szjpnk.css';
import '../../css/d/dxf42hrfr.css';
import '../../css/c/coyx2lbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n04szjpnk"/><path class="dxf42hrfr"/><path class="coyx2lbbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-coreos"} {...others} />);
}

export default Component;
