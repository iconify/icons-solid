import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fblvpxkay.css';
import '../../css/f/fr_tmn9fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fblvpxkay"/><circle class="fr_tmn9fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:camera"} {...others} />);
}

export default Component;
