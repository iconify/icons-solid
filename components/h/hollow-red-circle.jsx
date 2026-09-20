import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbepz408x.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/q/qyj032rbb.css';
import '../../css/b/byn-yqbec.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kbepz408x"/><g class="jn8qy4bru"><circle class="qyj032rbb"/><circle class="byn-yqbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hollow-red-circle"} {...others} />);
}

export default Component;
