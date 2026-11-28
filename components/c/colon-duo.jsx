import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib0-bt49v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t_kpvabmz.css';
import '../../css/o/o10isi8cf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ib0-bt49v secondary"/><g class="dt0cm9dhy primary"><path class="t_kpvabmz"/><path class="o10isi8cf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:colon-duo"} {...others} />);
}

export default Component;
