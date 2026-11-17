import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oyj6fz_fl.css';
import '../../css/y/ytg_fz4um.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oyj6fz_fl"/><path class="ytg_fz4um"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:house-arrow-left"} {...others} />);
}

export default Component;
