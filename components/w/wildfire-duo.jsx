import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxzbuzbjf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tlglmhb4u.css';
import '../../css/b/b8mpirbns.css';
import '../../css/f/f0ywp_bze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxzbuzbjf secondary"/><g class="dt0cm9dhy primary"><path class="tlglmhb4u"/><path class="b8mpirbns"/><path class="f0ywp_bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wildfire-duo"} {...others} />);
}

export default Component;
