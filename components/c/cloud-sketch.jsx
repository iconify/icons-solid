import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/to3ot3b1m.css';
import '../../css/x/xszfuzfac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="to3ot3b1m"/><path class="xszfuzfac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-sketch"} {...others} />);
}

export default Component;
