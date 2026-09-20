import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djj-rrvqc.css';
import '../../css/w/w3-ezh4fh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="djj-rrvqc"/><path class="w3-ezh4fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:left-speech-bubble"} {...others} />);
}

export default Component;
