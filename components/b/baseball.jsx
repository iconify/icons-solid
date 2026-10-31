import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xvbpfj4jl.css';
import '../../css/n/nw8oy7i7x.css';
import '../../css/a/amk28miip.css';
import '../../css/r/rwjf_mbsq.css';
import '../../css/z/zmq38_hyw.css';
import '../../css/l/l-8mu0bww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xvbpfj4jl"/><path class="nw8oy7i7x"/><path class="amk28miip"/><path class="rwjf_mbsq"/><path class="zmq38_hyw"/><path class="l-8mu0bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:baseball"} {...others} />);
}

export default Component;
