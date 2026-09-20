import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esc3mdb0h.css';
import '../../css/y/yrrluib2v.css';
import '../../css/w/w74ze7n-k.css';
import '../../css/n/ndp1nlbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="esc3mdb0h"/><path class="yrrluib2v"/><path class="w74ze7n-k"/><path class="ndp1nlbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:flashlight-2"} {...others} />);
}

export default Component;
