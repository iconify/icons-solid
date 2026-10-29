import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wq7qf7w2u.css';
import '../../css/a/a3p8i4bzk.css';
import '../../css/g/gfs4a6kly.css';
import '../../css/n/nc93o-6sk.css';
import '../../css/h/hpn9clb5h.css';
import '../../css/s/sswo3abhd.css';
import '../../css/q/qcrxbabmu.css';
import '../../css/g/g6fum6txk.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wq7qf7w2u"/><path class="a3p8i4bzk"/><path class="gfs4a6kly"/><path class="nc93o-6sk"/><path class="hpn9clb5h"/><path class="sswo3abhd"/><path class="qcrxbabmu"/><path class="g6fum6txk wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:history"} {...others} />);
}

export default Component;
