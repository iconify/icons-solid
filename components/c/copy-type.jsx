import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sicbtiqev.css';
import '../../css/p/pp945zb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="sicbtiqev"/><path class="pp945zb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:copy-type"} {...others} />);
}

export default Component;
