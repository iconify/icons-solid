import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/ws25fv4mc.css';
import '../../css/w/wvae-vf6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ws25fv4mc"/><path class="wvae-vf6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:camera-off"} {...others} />);
}

export default Component;
