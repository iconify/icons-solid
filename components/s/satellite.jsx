import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zakr_db6e.css';
import '../../css/v/vz43rbc3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zakr_db6e"/><path class="vz43rbc3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:satellite"} {...others} />);
}

export default Component;
