import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5_u58b_a.css';
import '../../css/b/b0j42im0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g5_u58b_a"/><path class="b0j42im0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:save-check"} {...others} />);
}

export default Component;
