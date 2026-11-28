import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl5pxnb9w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hx81_7bns.css';
import '../../css/x/xes07eans.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gl5pxnb9w secondary"/><g class="dt0cm9dhy primary"><path class="hx81_7bns"/><path class="xes07eans"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:quote-duo"} {...others} />);
}

export default Component;
