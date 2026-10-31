import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wqncibbxq.css';
import '../../css/n/nvpj3nczh.css';
import '../../css/o/oc7hd4i2b.css';
import '../../css/q/qkx492bsw.css';
import '../../css/f/fquqp2qwp.css';
import '../../css/p/pywe4ybws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wqncibbxq"/><path class="nvpj3nczh"/><path class="oc7hd4i2b"/><path class="qkx492bsw"/><path class="fquqp2qwp"/><path class="pywe4ybws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wallet-cards"} {...others} />);
}

export default Component;
