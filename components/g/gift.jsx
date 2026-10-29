import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rho2ymbkp.css';
import '../../css/f/fkkfai8ng.css';
import '../../css/a/a4jd90b6c.css';
import '../../css/u/ujg8gdbdu.css';
import '../../css/l/lx35wnbmd.css';
import '../../css/f/f23_yzbvj.css';
import '../../css/v/vnx9r5b4e.css';
import '../../css/s/svdujrbce.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rho2ymbkp wm-shadow"/><path class="fkkfai8ng"/><path class="a4jd90b6c"/><path class="ujg8gdbdu"/><path class="lx35wnbmd"/><path class="f23_yzbvj"/><path class="vnx9r5b4e wm-shine"/><path class="svdujrbce wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:gift"} {...others} />);
}

export default Component;
