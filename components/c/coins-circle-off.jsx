import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e50q3sbqu.css';
import '../../css/j/jm26pebpj.css';
import '../../css/p/pl0wyhbqf.css';
import '../../css/k/kjwkoqbvk.css';
import '../../css/x/xtfikvjfn.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e50q3sbqu"/><path clip-rule="evenodd" class="jm26pebpj"/><path clip-rule="evenodd" class="pl0wyhbqf"/><path clip-rule="evenodd" class="kjwkoqbvk"/><path clip-rule="evenodd" class="xtfikvjfn"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:coins-circle-off"} {...others} />);
}

export default Component;
