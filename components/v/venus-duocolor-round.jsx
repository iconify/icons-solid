import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t6r1jgw6n.css';
import '../../css/v/vco3hvbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t6r1jgw6n"/><path class="vco3hvbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:venus-duocolor-round"} {...others} />);
}

export default Component;
