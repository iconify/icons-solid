import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sy8ledbqv.css';
import '../../css/w/w4v25voyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="sy8ledbqv"/><path class="w4v25voyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:locate-square"} {...others} />);
}

export default Component;
