import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqq9tn6nm.css';
import '../../css/l/l_9ko3i0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wqq9tn6nm"/><path class="l_9ko3i0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-voice-two-tone"} {...others} />);
}

export default Component;
