import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ekpmeeb6p.css';
import '../../css/e/eugd78cic.css';
import '../../css/m/mqge962pq.css';
import '../../css/b/bcs7e5bbc.css';
import '../../css/l/lrqd1b22x.css';
import '../../css/s/sv8z8bbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ekpmeeb6p"/><path class="eugd78cic"/><path class="mqge962pq"/><path class="bcs7e5bbc"/><path class="lrqd1b22x"/><path class="sv8z8bbpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arcade-machine"} {...others} />);
}

export default Component;
