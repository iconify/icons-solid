import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wf0y2rbjb.css';
import '../../css/v/vxqzxrbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wf0y2rbjb"/><path class="vxqzxrbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-human-transmit-1"} {...others} />);
}

export default Component;
