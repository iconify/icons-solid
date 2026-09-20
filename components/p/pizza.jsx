import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sws4e3s4w.css';
import '../../css/n/ne9bbkb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sws4e3s4w"/><path class="ne9bbkb0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pizza"} {...others} />);
}

export default Component;
