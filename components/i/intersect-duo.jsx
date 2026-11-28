import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc9jhobin.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oszrj5blc.css';
import '../../css/i/inmwkd4ia.css';
import '../../css/b/brsnfwb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rc9jhobin secondary"/><g class="dt0cm9dhy primary"><path class="oszrj5blc"/><path class="inmwkd4ia"/><path class="brsnfwb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:intersect-duo"} {...others} />);
}

export default Component;
