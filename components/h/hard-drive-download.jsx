import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9w5mybtm.css';
import '../../css/m/m6a3e3btz.css';
import '../../css/p/p0sd-vr-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y9w5mybtm"/><rect class="m6a3e3btz"/><path class="p0sd-vr-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hard-drive-download"} {...others} />);
}

export default Component;
