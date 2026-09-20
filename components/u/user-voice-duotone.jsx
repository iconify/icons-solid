import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqq9tn6nm.css';
import '../../css/h/hpplanbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wqq9tn6nm"/><path class="hpplanbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-voice-duotone"} {...others} />);
}

export default Component;
