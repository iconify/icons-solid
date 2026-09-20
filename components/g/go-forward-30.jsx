import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzq9sqktj.css';
import '../../css/r/rq68acf4y.css';
import '../../css/x/xgae6gb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lzq9sqktj"/><path class="rq68acf4y"/><path clip-rule="evenodd" class="xgae6gb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:go-forward-30"} {...others} />);
}

export default Component;
