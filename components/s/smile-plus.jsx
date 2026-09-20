import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kra_f0veo.css';
import '../../css/w/w1_1d2bcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kra_f0veo"/><path class="w1_1d2bcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:smile-plus"} {...others} />);
}

export default Component;
