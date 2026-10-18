import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xb3q54bsr.css';
import '../../css/i/in9cwebnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xb3q54bsr"/><path class="in9cwebnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:leaf"} {...others} />);
}

export default Component;
