import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ryy7bo74d.css';
import '../../css/g/glg82pb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ryy7bo74d"/><path class="glg82pb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:siren-duocolor-round"} {...others} />);
}

export default Component;
