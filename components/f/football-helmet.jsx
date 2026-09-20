import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/maywn-bul.css';
import '../../css/g/g1_2eebtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="maywn-bul"/><path class="g1_2eebtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:football-helmet"} {...others} />);
}

export default Component;
