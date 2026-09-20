import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k7eynlbre.css';
import '../../css/n/nlezzjzzq.css';

const viewBox = {"width":1549,"height":2062};
const content = `<g class="n1lsf0bnc"><path class="k7eynlbre"/><path class="nlezzjzzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:abn-amro"} {...others} />);
}

export default Component;
