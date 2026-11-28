import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5rq1-xng.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/u/uis561t1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m5rq1-xng secondary"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="uis561t1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-heart-duo"} {...others} />);
}

export default Component;
