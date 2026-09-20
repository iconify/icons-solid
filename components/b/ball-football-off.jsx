import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dl77k1wmo.css';
import '../../css/m/mbhuwybop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dl77k1wmo"/><path class="mbhuwybop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ball-football-off"} {...others} />);
}

export default Component;
