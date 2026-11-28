import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu8469bse.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pq36bjb0y.css';
import '../../css/p/pzjv5fl5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fu8469bse secondary"/><g class="dt0cm9dhy primary"><path class="pq36bjb0y"/><path class="pzjv5fl5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mirror-duo"} {...others} />);
}

export default Component;
