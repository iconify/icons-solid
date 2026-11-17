import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jfswmq_7z.css';
import '../../css/j/j4xy7ua-m.css';
import '../../css/h/h6udzebto.css';
import '../../css/z/zuc_ukbkn.css';
import '../../css/c/c886rybsz.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="h01tyzbfu"><path class="jfswmq_7z"/><path class="j4xy7ua-m"/><circle class="h6udzebto"/><circle class="zuc_ukbkn"/><circle class="c886rybsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:apiko"} {...others} />);
}

export default Component;
