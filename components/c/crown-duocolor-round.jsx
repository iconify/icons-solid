import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mnafb_b5y.css';
import '../../css/g/gg5o0ubru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mnafb_b5y"/><path class="gg5o0ubru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crown-duocolor-round"} {...others} />);
}

export default Component;
