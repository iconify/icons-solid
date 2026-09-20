import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ul36bu9lo.css';
import '../../css/e/egjhlrmhl.css';
import '../../css/d/dr19a2blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ul36bu9lo"/><path class="egjhlrmhl"/><path class="dr19a2blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:house-roof"} {...others} />);
}

export default Component;
