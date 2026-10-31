import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aai24pb6y.css';
import '../../css/w/woc5lccts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aai24pb6y"/><path class="woc5lccts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-plus-duocolor-round"} {...others} />);
}

export default Component;
