import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/br_kb4_ma.css';
import '../../css/i/ito-6ibso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="br_kb4_ma"/><path class="ito-6ibso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-shopee"} {...others} />);
}

export default Component;
