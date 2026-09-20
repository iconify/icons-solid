import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sii_djcar.css';
import '../../css/h/h1s0h2q6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sii_djcar"/><path class="h1s0h2q6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-whatsapp"} {...others} />);
}

export default Component;
