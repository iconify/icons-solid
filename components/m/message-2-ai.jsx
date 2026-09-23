import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yz9kvk_4n.css';
import '../../css/m/mwmu_lynb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yz9kvk_4n"/><path class="mwmu_lynb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-2-ai"} {...others} />);
}

export default Component;
