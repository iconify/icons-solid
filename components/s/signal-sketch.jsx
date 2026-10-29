import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rk-uz4zdk.css';
import '../../css/w/w0dfylevz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rk-uz4zdk"/><path class="w0dfylevz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signal-sketch"} {...others} />);
}

export default Component;
