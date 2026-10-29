import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hbzdspbjk.css';
import '../../css/r/razfpcbqg.css';
import '../../css/w/wjakhsbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hbzdspbjk"/><path class="razfpcbqg"/><path class="wjakhsbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-sketch"} {...others} />);
}

export default Component;
