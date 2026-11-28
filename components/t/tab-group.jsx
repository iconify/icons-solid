import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dzfiyxf4x.css';
import '../../css/n/n0yvt0bhv.css';
import '../../css/y/yljxuhu5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dzfiyxf4x"/><path class="n0yvt0bhv"/><path class="yljxuhu5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tab-group"} {...others} />);
}

export default Component;
