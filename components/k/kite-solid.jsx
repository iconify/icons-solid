import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xa6j_4b4y.css';
import '../../css/v/vbvspnbfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="xa6j_4b4y"/><path class="vbvspnbfe wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kite-solid"} {...others} />);
}

export default Component;
