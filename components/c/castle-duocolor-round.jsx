import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d53ospbbr.css';
import '../../css/r/r96z0tspi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d53ospbbr"/><path class="r96z0tspi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:castle-duocolor-round"} {...others} />);
}

export default Component;
