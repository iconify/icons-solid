import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b9-pt6s_l.css';
import '../../css/h/hy3v-sbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b9-pt6s_l"/><path class="hy3v-sbrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:stairs"} {...others} />);
}

export default Component;
