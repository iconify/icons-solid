import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y3wwogb_e.css';
import '../../css/o/omos15brj.css';
import '../../css/n/np6wssw9i.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="bi12bsetm"><path class="y3wwogb_e"/><path class="omos15brj"/><path class="np6wssw9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:socketio-wordmark"} {...others} />);
}

export default Component;
