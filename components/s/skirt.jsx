import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsyu101jd.css';
import '../../css/x/xc9r3eb5l.css';
import '../../css/g/g3h3_1c-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nsyu101jd"/><path class="xc9r3eb5l"/><path class="g3h3_1c-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:skirt"} {...others} />);
}

export default Component;
