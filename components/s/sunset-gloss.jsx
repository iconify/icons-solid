import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w3xgh7v-x.css';
import '../../css/t/t13cg_bqv.css';
import '../../css/y/yix0xqbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="w3xgh7v-x wm-k"/><path class="t13cg_bqv wm-a"/><path class="wm-s yix0xqbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunset-gloss"} {...others} />);
}

export default Component;
