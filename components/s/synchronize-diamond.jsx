import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/te1dkybwn.css';
import '../../css/p/p1-h1qg_d.css';
import '../../css/j/j-k29q-gx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="te1dkybwn"/><path class="p1-h1qg_d"/><path class="j-k29q-gx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:synchronize-diamond"} {...others} />);
}

export default Component;
