import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z8hnim85c.css';
import '../../css/o/ohgsxs8qc.css';
import '../../css/l/l50m3pb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z8hnim85c"/><rect class="ohgsxs8qc"/><path class="l50m3pb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:house-manor"} {...others} />);
}

export default Component;
