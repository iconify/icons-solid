import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv6eija1r.css';
import '../../css/w/w93dlewkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pv6eija1r"/><path class="w93dlewkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bottle-spray"} {...others} />);
}

export default Component;
