import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zkf_pacah.css';
import '../../css/r/rppyogb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zkf_pacah"/><path class="rppyogb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bluesky-duocolor-round"} {...others} />);
}

export default Component;
