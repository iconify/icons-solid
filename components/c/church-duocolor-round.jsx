import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ohdwadw8m.css';
import '../../css/v/vrmgln8ck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ohdwadw8m"/><path class="vrmgln8ck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:church-duocolor-round"} {...others} />);
}

export default Component;
