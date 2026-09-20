import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqlpajbrm.css';
import '../../css/l/l_82l62bb.css';
import '../../css/f/fzg7edc3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dqlpajbrm"/><path class="l_82l62bb"/><path class="fzg7edc3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:database-bold"} {...others} />);
}

export default Component;
