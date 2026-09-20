import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovpkd-b5j.css';
import '../../css/s/sr1jcbcrc.css';
import '../../css/o/o3frjt0ug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ovpkd-b5j"/><path class="sr1jcbcrc"/><path class="o3frjt0ug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:mortar-pestle"} {...others} />);
}

export default Component;
