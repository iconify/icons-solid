import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z2w9qje6t.css';
import '../../css/m/mm2_i0bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="z2w9qje6t"/><path class="mm2_i0bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hockey"} {...others} />);
}

export default Component;
