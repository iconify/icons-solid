import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/ujarmf0ov.css';
import '../../css/y/ylhpf8tzr.css';
import '../../css/d/d4txopbsl.css';
import '../../css/y/ymjti08eb.css';
import '../../css/a/ahkl9uj7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ujarmf0ov"/><path class="ylhpf8tzr"/><circle class="d4txopbsl"/><circle class="ymjti08eb"/><path class="ahkl9uj7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:hat-and-glasses-outline"} {...others} />);
}

export default Component;
