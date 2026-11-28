import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1x1djbzo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/b/blc8-wb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1x1djbzo secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="blc8-wb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:disc-duo"} {...others} />);
}

export default Component;
