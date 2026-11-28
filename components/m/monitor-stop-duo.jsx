import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgpvc236c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/i/izggtwq7w.css';
import '../../css/e/e927hibau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgpvc236c secondary"/><g class="dt0cm9dhy primary"><path class="uuw1qkbsv"/><path class="izggtwq7w"/><path class="e927hibau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-stop-duo"} {...others} />);
}

export default Component;
