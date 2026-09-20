import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gzo1x4baw.css';
import '../../css/h/hroqse4ny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gzo1x4baw"/><path class="hroqse4ny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:armchair"} {...others} />);
}

export default Component;
