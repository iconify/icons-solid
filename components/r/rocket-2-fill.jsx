import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wo9mpubcg.css';
import '../../css/g/gvm8464rs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wo9mpubcg"/><path class="gvm8464rs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rocket-2-fill"} {...others} />);
}

export default Component;
