import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qhfmzzbsa.css';
import '../../css/n/no97jjb_s.css';
import '../../css/q/qzcpcybrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qhfmzzbsa"/><path class="no97jjb_s"/><path class="qzcpcybrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-text-shield"} {...others} />);
}

export default Component;
