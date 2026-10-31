import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cs1aaub6s.css';
import '../../css/b/bktblbcwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cs1aaub6s"/><path class="bktblbcwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-moon-duocolor-round"} {...others} />);
}

export default Component;
