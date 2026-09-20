import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fz-3ibcpo.css';
import '../../css/h/hhhg-t-br.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fz-3ibcpo"/><path class="hhhg-t-br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-angular"} {...others} />);
}

export default Component;
