import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vebsodbpg.css';
import '../../css/v/v4-7nlbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vebsodbpg"/><path class="v4-7nlbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:package-download-duocolor-round"} {...others} />);
}

export default Component;
