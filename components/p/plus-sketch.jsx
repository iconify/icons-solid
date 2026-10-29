import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pr2f-uj9i.css';
import '../../css/q/q32w2msyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pr2f-uj9i"/><path class="q32w2msyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plus-sketch"} {...others} />);
}

export default Component;
