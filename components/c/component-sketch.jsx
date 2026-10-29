import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sbndeccgb.css';
import '../../css/s/sqr5ssbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sbndeccgb wm-k"/><path class="sqr5ssbvv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:component-sketch"} {...others} />);
}

export default Component;
