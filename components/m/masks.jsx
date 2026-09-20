import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f_zksqbkr.css';
import '../../css/z/zpc15gbnz.css';
import '../../css/o/oohfzfbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="f_zksqbkr"/><path class="zpc15gbnz"/><path class="oohfzfbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:masks"} {...others} />);
}

export default Component;
