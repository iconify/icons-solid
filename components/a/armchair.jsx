import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zkeuekq2l.css';
import '../../css/s/sf2e0acnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zkeuekq2l"/><path class="sf2e0acnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:armchair"} {...others} />);
}

export default Component;
