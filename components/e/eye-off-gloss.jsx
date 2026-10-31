import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hx8hw7b9s.css';
import '../../css/x/xnodzworh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="hx8hw7b9s wm-k"/><path class="wm-s xnodzworh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eye-off-gloss"} {...others} />);
}

export default Component;
