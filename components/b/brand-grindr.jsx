import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnozrgv-n.css';
import '../../css/q/qug2-ac7c.css';
import '../../css/p/p1g8vqjol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hnozrgv-n"/><path class="qug2-ac7c"/><path class="p1g8vqjol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-grindr"} {...others} />);
}

export default Component;
