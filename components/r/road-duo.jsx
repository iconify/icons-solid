import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z7zs_wb6f.css';
import '../../css/a/au-jcou0p.css';
import '../../css/y/y6gcu_9pf.css';
import '../../css/y/yktyznqdj.css';
import '../../css/p/py49z5b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z7zs_wb6f"/><path class="au-jcou0p"/><path class="y6gcu_9pf"/><path class="yktyznqdj"/><path class="py49z5b4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:road-duo"} {...others} />);
}

export default Component;
