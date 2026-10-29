import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tpf_n-bwq.css';
import '../../css/j/jhxi-trnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tpf_n-bwq"/><rect class="jhxi-trnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-letter-e"} {...others} />);
}

export default Component;
