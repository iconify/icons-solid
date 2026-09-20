import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqo_tsbmq.css';
import '../../css/k/kukdg741y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hqo_tsbmq"/><path class="kukdg741y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tip-jar"} {...others} />);
}

export default Component;
