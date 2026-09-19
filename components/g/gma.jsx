import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alg72xgbs.css';
import '../../css/i/imr1alxdp.css';
import '../../css/k/kn59kgbfh.css';
import '../../css/h/h7dmvcbfy.css';
import '../../css/w/w34tp_tih.css';
import '../../css/g/g2rl923yh.css';
import '../../css/q/q5jwgbbrl.css';
import '../../css/l/llejdxbqt.css';
import '../../css/p/phob6gb0i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="alg72xgbs"/><path class="imr1alxdp"/><path class="kn59kgbfh"/><path class="h7dmvcbfy"/><path class="w34tp_tih"/><path class="g2rl923yh"/><path class="q5jwgbbrl"/><path class="llejdxbqt"/><circle class="phob6gb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:gma"} {...others} />);
}

export default Component;
