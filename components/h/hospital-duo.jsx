import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8pgx56lc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qw5ydqobj.css';
import '../../css/q/qlxmydb_k.css';
import '../../css/h/h-p1tzb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8pgx56lc secondary"/><g class="dt0cm9dhy primary"><path class="qw5ydqobj"/><path class="qlxmydb_k"/><path class="h-p1tzb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hospital-duo"} {...others} />);
}

export default Component;
