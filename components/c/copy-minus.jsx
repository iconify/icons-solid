import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gsc5ntbis.css';
import '../../css/p/po1i9bo_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gsc5ntbis"/><path class="po1i9bo_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:copy-minus"} {...others} />);
}

export default Component;
