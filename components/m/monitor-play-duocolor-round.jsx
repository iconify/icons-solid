import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yiyaygkee.css';
import '../../css/w/w9a6t4fsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yiyaygkee"/><path class="w9a6t4fsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-play-duocolor-round"} {...others} />);
}

export default Component;
