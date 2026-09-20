import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vxo3gieyf.css';
import '../../css/v/v2e_iyb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vxo3gieyf"/><path class="v2e_iyb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:current-location"} {...others} />);
}

export default Component;
