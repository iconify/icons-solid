import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aucf45zbb.css';
import '../../css/f/fr_tmn9fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aucf45zbb"/><circle class="fr_tmn9fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:camera-line"} {...others} />);
}

export default Component;
