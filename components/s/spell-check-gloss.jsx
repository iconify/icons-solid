import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/em0ej-gca.css';
import '../../css/z/ztp2kv4xl.css';
import '../../css/m/mcyekutrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="em0ej-gca wm-k"/><path class="wm-a ztp2kv4xl"/><path class="mcyekutrd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spell-check-gloss"} {...others} />);
}

export default Component;
