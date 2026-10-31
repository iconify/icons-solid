import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxoqgwdnm.css';
import '../../css/a/atkmu9bjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mxoqgwdnm"/><path class="atkmu9bjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-sparkle-corner-duocolor-round"} {...others} />);
}

export default Component;
