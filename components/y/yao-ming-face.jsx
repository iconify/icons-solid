import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjs8g5bro.css';
import '../../css/h/hnhg-4b7j.css';
import '../../css/y/ybkzf17io.css';
import '../../css/v/vh1woomdg.css';
import '../../css/l/lisa4gb5l.css';
import '../../css/j/j_dou9bhu.css';
import '../../css/l/lyg-mnbkz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jjs8g5bro"/><path class="hnhg-4b7j"/><path clip-rule="evenodd" class="ybkzf17io"/><path class="vh1woomdg"/><path class="lisa4gb5l"/><path class="j_dou9bhu"/><path class="lyg-mnbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:yao-ming-face"} {...others} />);
}

export default Component;
