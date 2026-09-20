import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlf7r1kic.css';
import '../../css/s/sicbtiqev.css';
import '../../css/m/mrcf2ubsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zlf7r1kic"/><rect class="sicbtiqev"/><path class="mrcf2ubsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:copy-file-path"} {...others} />);
}

export default Component;
