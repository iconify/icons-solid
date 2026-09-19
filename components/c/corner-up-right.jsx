import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uhxol8b3c.css';
import '../../css/z/zphts3buk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="uhxol8b3c"/><path class="zphts3buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:corner-up-right"} {...others} />);
}

export default Component;
