import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbi8oy9sx.css';
import '../../css/f/ficmqko7k.css';
import '../../css/q/q3g4qrbhh.css';
import '../../css/v/vtquzebna.css';
import '../../css/v/v0kq9yx5b.css';
import '../../css/p/paa72lbba.css';
import '../../css/n/n1855ybot.css';
import '../../css/k/kif9j6byb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fbi8oy9sx"/><path class="ficmqko7k"/><path class="q3g4qrbhh"/><path clip-rule="evenodd" class="vtquzebna"/><path class="v0kq9yx5b"/><path class="paa72lbba"/><path class="n1855ybot"/><path class="kif9j6byb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:startup"} {...others} />);
}

export default Component;
