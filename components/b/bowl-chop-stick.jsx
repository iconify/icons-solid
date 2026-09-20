import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zhg6tvjcc.css';
import '../../css/f/fljjg0bcd.css';
import '../../css/d/d42da4bym.css';
import '../../css/x/x4rhj3b1g.css';
import '../../css/q/qwrmidbrs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path clip-rule="evenodd" class="zhg6tvjcc"/><path class="fljjg0bcd"/><path class="d42da4bym"/><path class="x4rhj3b1g"/><path clip-rule="evenodd" class="qwrmidbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bowl-chop-stick"} {...others} />);
}

export default Component;
