import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qi9zeu02k.css';
import '../../css/m/m3nqpup-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="qi9zeu02k wm-k"/><path class="m3nqpup-o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fireplace-gloss"} {...others} />);
}

export default Component;
