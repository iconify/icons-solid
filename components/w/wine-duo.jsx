import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6hntubbs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q6fepbcme.css';
import '../../css/s/sy986tb5k.css';
import '../../css/w/wrum7db2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6hntubbs secondary"/><g class="dt0cm9dhy primary"><path class="q6fepbcme"/><path class="sy986tb5k"/><path class="wrum7db2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wine-duo"} {...others} />);
}

export default Component;
