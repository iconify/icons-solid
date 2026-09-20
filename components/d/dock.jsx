import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mqtixbwqo.css';
import '../../css/i/i_kpawtqq.css';
import '../../css/n/nl66y9men.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mqtixbwqo"/><rect class="i_kpawtqq"/><path class="nl66y9men"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:dock"} {...others} />);
}

export default Component;
