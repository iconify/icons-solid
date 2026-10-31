import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_tv9j08y.css';
import '../../css/k/kueqitsbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e_tv9j08y"/><path class="kueqitsbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:parrot-duocolor-round"} {...others} />);
}

export default Component;
