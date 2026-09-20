import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fc1zhqbtz.css';
import '../../css/x/x756dtbrg.css';
import '../../css/v/vbj2lk1_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fc1zhqbtz"/><path class="x756dtbrg"/><path class="vbj2lk1_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sport-billard"} {...others} />);
}

export default Component;
