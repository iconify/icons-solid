import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w06rjo-ky.css';
import '../../css/d/d1u0twgkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w06rjo-ky"/><path class="d1u0twgkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pig-duocolor-round"} {...others} />);
}

export default Component;
