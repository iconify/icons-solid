import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8nc_j7iv.css';
import '../../css/b/b2t-tzb3i.css';
import '../../css/w/w44vulk8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q8nc_j7iv"/><path class="b2t-tzb3i"/><path class="w44vulk8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-bitcoin"} {...others} />);
}

export default Component;
