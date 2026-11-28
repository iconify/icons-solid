import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u_eejuguq.css';
import '../../css/o/o746-qb_q.css';
import '../../css/c/c6u2nfiaa.css';
import '../../css/i/ig8ghpnvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u_eejuguq"/><path class="o746-qb_q"/><path class="c6u2nfiaa"/><path class="ig8ghpnvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:motorcycle"} {...others} />);
}

export default Component;
