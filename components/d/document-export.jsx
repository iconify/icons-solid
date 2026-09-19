import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qili0cbnj.css';
import '../../css/i/iq65ps9zm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qili0cbnj"/><path class="iq65ps9zm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-export"} {...others} />);
}

export default Component;
