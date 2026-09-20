import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rumg0xb2s.css';
import '../../css/p/pvbrjybkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rumg0xb2s"/><path class="pvbrjybkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:stairs-arch"} {...others} />);
}

export default Component;
