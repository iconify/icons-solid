import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-4ziq31h.css';
import '../../css/o/o7-5ytbma.css';
import '../../css/n/n2e31kbxj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q-4ziq31h"/><path class="o7-5ytbma"/><path class="n2e31kbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:threespeechbubbles"} {...others} />);
}

export default Component;
