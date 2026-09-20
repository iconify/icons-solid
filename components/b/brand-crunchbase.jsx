import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjz2glbxi.css';
import '../../css/b/bhgqr4h1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mjz2glbxi"/><path class="bhgqr4h1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-crunchbase"} {...others} />);
}

export default Component;
