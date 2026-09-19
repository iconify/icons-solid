import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zn5btr3ag.css';
import '../../css/z/z00wvqbup.css';
import '../../css/i/i8hlvlp5q.css';
import '../../css/d/djcoabcjk.css';
import '../../css/b/bvf5k4beu.css';
import '../../css/q/quzg2vzyk.css';
import '../../css/c/c2mu8acuj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zn5btr3ag"/><path clip-rule="evenodd" class="z00wvqbup"/><path clip-rule="evenodd" class="i8hlvlp5q"/><path class="djcoabcjk"/><path clip-rule="evenodd" class="bvf5k4beu"/><path class="quzg2vzyk"/><path clip-rule="evenodd" class="c2mu8acuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:briefcase"} {...others} />);
}

export default Component;
