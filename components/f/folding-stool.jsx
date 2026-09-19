import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/czcprh0jc.css';
import '../../css/n/nsyzzsboq.css';
import '../../css/c/cvgy3_b5r.css';
import '../../css/i/ipcm43bxh.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="czcprh0jc"/><path class="nsyzzsboq"/><path class="cvgy3_b5r"/><path class="ipcm43bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:folding-stool"} {...others} />);
}

export default Component;
