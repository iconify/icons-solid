import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vh0pyof4v.css';
import '../../css/o/ox_05kl4h.css';
import '../../css/v/vo64d318x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vh0pyof4v"/><path class="ox_05kl4h"/><path class="vo64d318x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-arrow-u-turn-right-two-tone"} {...others} />);
}

export default Component;
