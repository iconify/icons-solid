import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i31tw5b-x.css';
import '../../css/w/w2-g2t2qo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="i31tw5b-x wm-k"/><path class="w2-g2t2qo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kalash-gloss"} {...others} />);
}

export default Component;
