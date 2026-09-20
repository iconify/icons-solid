import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z-pfipbhe.css';
import '../../css/z/zk4sr_mhh.css';
import '../../css/r/r5ffsqbee.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z-pfipbhe"/><path class="zk4sr_mhh"/><path class="r5ffsqbee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:music-genre-romantic-cd"} {...others} />);
}

export default Component;
