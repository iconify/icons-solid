import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p2uslcb4q.css';
import '../../css/p/pv5w52brh.css';
import '../../css/y/yz1e5bbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p2uslcb4q"/><path class="pv5w52brh"/><path class="yz1e5bbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:frisbee"} {...others} />);
}

export default Component;
