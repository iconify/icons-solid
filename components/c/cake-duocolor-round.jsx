import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y8pz_j_an.css';
import '../../css/m/mhampu3tz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y8pz_j_an"/><path class="mhampu3tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cake-duocolor-round"} {...others} />);
}

export default Component;
