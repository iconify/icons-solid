import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/a/ai4x40alt.css';
import '../../css/m/mq7-sbbud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="ai4x40alt"/><path class="mq7-sbbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-plus"} {...others} />);
}

export default Component;
