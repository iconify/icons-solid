import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uoqh7ofly.css';
import '../../css/f/fwrdtm7of.css';
import '../../css/x/x1dfjybuh.css';
import '../../css/o/oq5cfub0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uoqh7ofly wm-k"/><path class="fwrdtm7of wm-k"/><path class="wm-a x1dfjybuh"/><path class="oq5cfub0i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chinese-knot-sketch"} {...others} />);
}

export default Component;
