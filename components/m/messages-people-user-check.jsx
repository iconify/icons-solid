import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myj07eb3f.css';
import '../../css/o/onug22b0j.css';
import '../../css/y/ycdmvebni.css';
import '../../css/l/lqizmi5wo.css';
import '../../css/s/sx315jgmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="myj07eb3f"/><path class="onug22b0j"/><path class="ycdmvebni"/><path class="lqizmi5wo"/><path class="sx315jgmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:messages-people-user-check"} {...others} />);
}

export default Component;
