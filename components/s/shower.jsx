import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dv5gz4bfo.css';
import '../../css/i/i77jj_b8u.css';
import '../../css/q/qqfouabbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dv5gz4bfo"/><path class="i77jj_b8u"/><path class="qqfouabbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shower"} {...others} />);
}

export default Component;
