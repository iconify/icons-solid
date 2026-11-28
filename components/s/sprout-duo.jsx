import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsqkiebje.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lpnxgyw7y.css';
import '../../css/h/h_u1fj4xc.css';
import '../../css/v/vf4566bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsqkiebje secondary"/><g class="dt0cm9dhy primary"><path class="lpnxgyw7y"/><path class="h_u1fj4xc"/><path class="vf4566bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sprout-duo"} {...others} />);
}

export default Component;
