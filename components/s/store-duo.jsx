import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nbh0wg0gi.css';
import '../../css/n/nfcb_rb2q.css';
import '../../css/s/soc2g0bzj.css';
import '../../css/m/mno_rjo8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nbh0wg0gi"/><path class="nfcb_rb2q wm-a"/><path class="soc2g0bzj"/><path class="mno_rjo8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:store-duo"} {...others} />);
}

export default Component;
