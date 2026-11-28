import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uacp7pu3u.css';
import '../../css/d/db-0dmlok.css';
import '../../css/x/x7vrpjlro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uacp7pu3u"/><path class="db-0dmlok"/><path class="x7vrpjlro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:kanban-duo"} {...others} />);
}

export default Component;
