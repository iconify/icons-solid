import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cbdib2bdr.css';
import '../../css/d/d_72ekbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cbdib2bdr"/><path class="d_72ekbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:layers-arrow-up"} {...others} />);
}

export default Component;
