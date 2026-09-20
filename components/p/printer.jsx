import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lpyv3bhvh.css';
import '../../css/m/mto1a6gii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lpyv3bhvh"/><rect class="mto1a6gii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:printer"} {...others} />);
}

export default Component;
