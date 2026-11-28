import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p713cyb0a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/y/y7ru0bcsy.css';
import '../../css/n/ng4omlguy.css';
import '../../css/w/w50d7q6od.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p713cyb0a secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="y7ru0bcsy"/><path class="ng4omlguy"/><path class="w50d7q6od"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-percent-duo"} {...others} />);
}

export default Component;
