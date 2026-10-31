import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w9j05kbxw.css';
import '../../css/r/rr43ghbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w9j05kbxw"/><path class="rr43ghbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:desktop-tower-duocolor-round"} {...others} />);
}

export default Component;
