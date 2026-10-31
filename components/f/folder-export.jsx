import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8iscc2_d.css';
import '../../css/n/nrc4mt3ai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p8iscc2_d"/><path class="nrc4mt3ai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:folder-export"} {...others} />);
}

export default Component;
