import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n93wedc1i.css';
import '../../css/k/k53r_hboz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n93wedc1i"/><path class="k53r_hboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:door-duocolor-round"} {...others} />);
}

export default Component;
